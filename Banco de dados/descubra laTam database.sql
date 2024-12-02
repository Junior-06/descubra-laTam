create database descubralatam;

use descubralatam;

create table usuario(
idUsuario int primary key auto_increment,
nome varchar(50),
email varchar(50),
senha varchar(50)
);

create table respostaUsuario(
idTeste int auto_increment,
fkUsuario int,
pergunta1 char(2),
pergunta2 char(2),
pergunta3 char(2),
pergunta4 char(2),
constraint fkUsuario foreign key (fkUsuario) references usuario(idUsuario),
constraint Pks primary key (idTeste,fkUsuario)
);

select * from respostaUsuario;

SELECT * FROM respostaUsuario WHERE fkUsuario = 1 ORDER BY idTeste DESC LIMIT 1;

select * from usuario;