use descubralatam;

drop table usuario;

create table usuario(
idUsuario int primary key auto_increment,
nome varchar(50),
email varchar(50),
senha varchar(50)
);

select * from usuario;