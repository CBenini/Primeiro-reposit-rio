'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Usuario = sequelize.define('Usuario',{
		idUsuario: {
			field: 'idUsuario',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},		
		nomeCompleto: {
			field: 'nomeCompleto',
			type: DataTypes.STRING,
			allowNull: false
		},
		dataNascimento: {
			field: 'dataNascimento',
			type: DataTypes.STRING,
			allowNull: false
		},
		telCel: {
			field: 'telCel',
			type: DataTypes.STRING,
			allowNull: false
		},
		email: {
			field: 'email',
			type: DataTypes.STRING,
			allowNull: false
		},
		senha: {
			field: 'senha',
			type: DataTypes.STRING,
			allowNull: false
		},
		genero: {
			field: 'genero',
			type: DataTypes.STRING,
			allowNull: false
		},
		uf: {
			field: 'uf',
			type: DataTypes.STRING,
			allowNull: false
		},
		municipio: {
			field: 'municipio',
			type: DataTypes.STRING,
			allowNull: false
		},
		cep: {
			field: 'cep',
			type: DataTypes.STRING,
			allowNull: false
		},
		logradouro: {
			field: 'logradouro',
			type: DataTypes.STRING,
			allowNull: true
		},
		numero: {
			field: 'numero',
			type: DataTypes.INTEGER,
			allowNull: false
		},
		bairro: {
			field: 'bairro',
			type: DataTypes.STRING,
			allowNull: false
		},
		posicao: {
			field: 'posicao',
			type: DataTypes.STRING,
			allowNull: false
		},
		pernaDominante: {
			field: 'pernaDominante',
			type: DataTypes.STRING,
			allowNull: false
		},
		altura: {
			field: 'altura',
			type: DataTypes.INTEGER,
			allowNull: false
		},
		peso: {
			field: 'peso',
			type: DataTypes.INTEGER,
			allowNull: false
		},
		caracteristicas: {
			field: 'caracteristicas',
			type: DataTypes.STRING,
			allowNull: true
		},
		experiencias: {
			field: 'experiencias',
			type: DataTypes.STRING,
			allowNull: true
		},
	}, 
	{
		tableName: 'usuario', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Usuario;
};

