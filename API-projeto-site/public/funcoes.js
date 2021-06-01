let email_usuario;
let nome_usuario;
let data_nascimento_usuario;
let tel_cel_usuario;
let senha_usuario;
let genero_usuario;

let uf_usuario;
let municipio_usuario;
let cep_usuario;
let logradouro_usuario;
let numero_usuario;
let bairro_usuario;

let posicao_usuario;
let perna_dominante_usuario;
let altura_usuario;
let peso_usuario;
let caracteristicas_usuario;
let experiencias_usuario;

let altura_media;
let peso_medio;

function redirecionar_login() {
    window.location.href = 'login.html';
}

function verificar_autenticacao() {
    email_usuario = sessionStorage.email_usuario_meuapp;
    nome_usuario = sessionStorage.nome_usuario_meuapp;
    data_nascimento_usuario = sessionStorage.data_nascimento_usuario_meuapp;
    tel_cel_usuario = sessionStorage.tel_cel_usuario_meuapp;
    senha_usuario = sessionStorage.senha_usuario_meuapp;
    genero_usuario = sessionStorage.genero_usuario_meuapp;

    uf_usuario = sessionStorage.uf_usuario_meuapp;
    municipio_usuario = sessionStorage.municipio_usuario_meuapp;
    cep_usuario = sessionStorage.cep_usuario_meuapp;
    logradouro_usuario = sessionStorage.logradouro_usuario_meuapp;
    numero_usuario = sessionStorage.numero_usuario_meuapp;
    bairro_usuario = sessionStorage.bairro_usuario_meuapp;

    posicao_usuario = sessionStorage.posicao_usuario_meuapp;
    perna_dominante_usuario = sessionStorage.perna_dominante_usuario_meuapp;
    altura_usuario = sessionStorage.altura_usuario_meuapp;
    peso_usuario = sessionStorage.peso_usuario_meuapp;
    caracteristicas_usuario = sessionStorage.caracteristicas_usuario_meuapp;
    experiencias_usuario = sessionStorage.experiencias_usuario_meuapp;
    
    if (email_usuario == undefined)  {
        redirecionar_login();
    } else {
        b_nome.innerHTML = nome_usuario;
        span_nome.innerHTML = nome_usuario;
        span_email.innerHTML = email_usuario;
        span_data_nascimento.innerHTML = data_nascimento_usuario;
        span_tel_cel.innerHTML = tel_cel_usuario;
        span_genero.innerHTML = genero_usuario;

        span_uf.innerHTML = uf_usuario;
        span_municipio.innerHTML = municipio_usuario;
        span_cep.innerHTML = cep_usuario;
        span_logradouro.innerHTML = logradouro_usuario;
        span_numero.innerHTML = numero_usuario;
        span_bairro.innerHTML = bairro_usuario;

        span_posicao.innerHTML = posicao_usuario;
        span_perna_dominante.innerHTML = perna_dominante_usuario;
        span_altura.innerHTML = altura_usuario;
        span_peso.innerHTML = peso_usuario;
        span_caracteristicas.innerHTML = caracteristicas_usuario;
        span_experiencias.innerHTML = experiencias_usuario;

        validar_sessao();
    }
    
}

function logoff() {
    finalizar_sessao();
    sessionStorage.clear();
    redirecionar_login();
}

function validar_sessao() {
    fetch(`/usuarios/sessao/${email_usuario}`, {cache:'no-store'})
    .then(resposta => {
        if (resposta.ok) {
            resposta.text().then(texto => {
                console.log('Sessão :) ', texto);    
            });
        } else {
            console.error('Sessão :.( ');
            logoff();
        } 
    });    
}

function finalizar_sessao() {
    fetch(`/usuarios/sair/${email_usuario}`, {cache:'no-store'}); 
}