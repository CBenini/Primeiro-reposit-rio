var express = require('express');
var router = express.Router();
var sequelize = require('../models').sequelize;
var Usuario = require('../models').Usuario;

let sessoes = [];

/* Recuperar usuário por email e senha */
router.post('/autenticar', function(req, res, next) {
	console.log('Recuperando usuário por email e senha');

	var email = req.body.email; // depois de .body, use o nome (name) do campo em seu formulário de email
	var senha = req.body.senha; // depois de .body, use o nome (name) do campo em seu formulário de email	
	
	let instrucaoSql = `select * from usuario where email='${email}' and senha='${senha}'`;
	console.log(instrucaoSql);

	sequelize.query(instrucaoSql, {
		model: Usuario
	}).then(resultado => {
		console.log(`Encontrados: ${resultado.length}`);

		if (resultado.length == 1) {
			sessoes.push(resultado[0].dataValues.email);
			console.log('sessoes: ',sessoes);
			res.json(resultado[0]);
		} else if (resultado.length == 0) {
			res.status(403).send('email e/ou senha inválido(s)');
		} else {
			res.status(403).send('Mais de um usuário com o mesmo email e senha!');
		}

	}).catch(erro => {
		console.error(erro);
		res.status(500).send(erro.message);
  	});
});

/* Cadastrar usuário */
router.post('/cadastrar', function(req, res, next) {
	console.log('Criando um usuário');
	
	Usuario.create({
		nomeCompleto: req.body.nomeCompleto,
		email: req.body.email,
		senha: req.body.senha,
		telCel: req.body.telCel,
		dataNascimento: req.body.dataNascimento,
		genero: req.body.genero,
		uf: req.body.uf,
		municipio: req.body.municipio,
		cep: req.body.cep,
		logradouro: req.body.logradouro,
		numero: req.body.numero,
		bairro: req.body.bairro,
		posicao: req.body.posicao,
		pernaDominante: req.body.pernaDominante,
		altura: req.body.altura,
		peso: req.body.peso,
		caracteristicas: req.body.caracteristicas,
		experiencias: req.body.experiencias,
	}).then(resultado => {
		console.log(`Registro criado: ${resultado}`)
        res.send(resultado);
    }).catch(erro => {
		console.error(erro);
		res.status(500).send(erro.message);
  	});
});


/* Verificação de usuário */
router.get('/sessao/:email', function(req, res, next) {
	let email = req.params.email;
	console.log(`Verificando se o usuário ${email} tem sessão`);
	
	let tem_sessao = false;
	for (let u=0; u<sessoes.length; u++) {
		if (sessoes[u] == email) {
			tem_sessao = true;
			break;
		}
	}

	if (tem_sessao) {
		let mensagem = `Usuário ${email} possui sessão ativa!`;
		console.log(mensagem);
		res.send(mensagem);
	} else {
		res.sendStatus(403);
	}
	
});


/* Logoff de usuário */
router.get('/sair/:email', function(req, res, next) {
	let email = req.params.email;
	console.log(`Finalizando a sessão do usuário ${email}`);
	let nova_sessoes = []
	for (let u=0; u<sessoes.length; u++) {
		if (sessoes[u] != email) {
			nova_sessoes.push(sessoes[u]);
		}
	}
	sessoes = nova_sessoes;
	res.send(`Sessão do usuário ${email} finalizada com sucesso!`);
});


/* Recuperar todos os usuários */
router.get('/', function(req, res, next) {
	console.log('Recuperando todos os usuários');
	Usuario.findAndCountAll().then(resultado => {
		console.log(`${resultado.count} registros`);

		res.json(resultado.rows);
	}).catch(erro => {
		console.error(erro);
		res.status(500).send(erro.message);
  	});
});


router.get('/metricas', function(req, res, next) {
	console.log('Recuperar as métricas dos usuários');
	
    let instrucaoSql = `select distinct(select round(avg(peso),1) from usuario) as 'pesoMedio', (select round(avg(altura),1) from usuario) as 'alturaMedia' from usuario;`;

	sequelize.query(instrucaoSql, {
		model: Usuario,
		mapToModel: true 
	})
	.then(resultado => {
		console.log(`Encontrados: ${resultado.length}`);
		res.json(resultado);
	}).catch(erro => {
		console.error(erro);
		res.status(500).send(erro.message);
	});
});

module.exports = router;
