create database peneirando;
use peneirando;

create table usuario(
	idUsuario int primary key auto_increment,
    nomeCompleto varchar(45) not null, 
    dataNascimento date not null, 
    telCel varchar(11) not null, 
    email varchar(45) not null, 
    senha varchar(45) not null,  
    genero varchar(10) not null, 
    check(genero='masculino' or genero='feminino'),
    uf varchar(20) not null,
    municipio varchar(45) not null, 
    cep char(8) not null, 
    logradouro varchar(45), 
    numero int not null,
    bairro varchar(45) not null,
    posicao varchar(20) not null,
    pernaDominante varchar(20) not null, 
    check (pernaDominante='destro' or pernaDominante='canhoto' or pernaDominante='ambidestro'), 
    altura int not null, 
    peso int not null, 
    caracteristicas varchar(255),
    experiencias varchar(255)
);

select * from usuario;

select round(avg(peso),1) as "Peso médio" from usuario;
select round(avg(altura),1) as "Altura média" from usuario;

select distinct(select round(avg(peso),1) from usuario) as 'pesoMedio', 
			   (select round(avg(altura),1) from usuario) as 'alturaMedia'
					from usuario;

-- --------------------------------------------------
create database peneirando;
use peneirando;

create table usuario(
	idUsuario int primary key auto_increment,
    nomeCompleto varchar(45) not null, 
    dataNascimento date not null, 
    telCel char(11) not null, 
    email varchar(45) not null, 
    senha varchar(45) not null  
);

create table endereco(
	idEndereco int primary key auto_increment,
    uf char(2) not null,
    municipio varchar(45) not null, 
    cep char(8) not null, 
    logradouro varchar(45), 
    numero int not null,
    bairro varchar(45) not null
);

create table dados(
	idDados int primary key auto_increment,
    posicao varchar(20) not null,
    pernaDominante varchar(20) not null, 
    check (pernaDominante='destro' or pernaDominante='canhoto' or pernaDominante='ambidestro'), 
    altura decimal(3,2) not null, 
    peso decimal(3,1) not null, 
    caracteristicas varchar(255),
    experiencias varchar(255)
);

alter table usuario add column fkDados int;
alter table usuario add foreign key (fkDados) references dados(idDados);

alter table usuario add column fkEndereco int;
alter table usuario add foreign key (fkEndereco) references endereco(idEndereco);

desc usuario;
desc endereco;
desc dados;

select * from usuario;
select * from endereco; 
select * from dados;

drop table usuario;
drop table endereco;
drop table dados;

drop database usuario;








