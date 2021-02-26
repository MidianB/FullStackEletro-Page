create database fullstackeletro
default character set utf8
default collate utf8_general_ci;


create table produtos(
id_produto int not null primary key auto_increment,
id_categoria int not null,
categoria varchar(60) not null,
descricao_produto varchar(100) not null,
preco_inicial decimal (8,2) not null,
preco_desconto decimal (8,2) not null,
nomeimagem varchar(60) not null unique,
marca varchar(20) not null);



insert into produtos (id_produto,id_categoria,categoria,descricao_produto,preco_inicial,preco_desconto,nomeimagem,marca) values
(default ,'1', 'geladeira', 'Geladeira Frost Free Brastemp Side Inverse 540 Litros', 6389.00, 5019.00, 'geladeira_brastemp.jpg', 'Brastemp'),
(default ,'1', 'geladeira', 'Geladeira Frost Free Brastemp Branca 375 Litros', 2068.6, 1910.9, 'geladeira_brastemp_branca.jpg', 'Brastemp'),
(default ,'1', 'geladeira', 'Geladeira Frost Free Consul Prata 340 Litros', 2199.99, 2069.00, 'geladeira_consul.jpg', 'Consul'),
(default ,'2', 'fogao', 'Fogão 4 Bocas Consul Inox com Mesa de Vidro', 1299.99, 1129.00, 'fogao_inox.jpg', 'Consul'),
(default ,'2', 'fogao', 'Fogão 4 Bocas Atlas Monaco com Acendimento Automatico', 699.99, 519.70, 'fogao_monaco.jpg', 'Monaco'),
(default ,'3', 'microondas', 'Microondas Consul Prateado Inox 32L Espelhado 220v', 589.99, 409.88, 'microondas_consul.jpg', 'Consul'),
(default ,'3', 'microondas', 'Microondas Philco Inox 25L Espelhado 220v', 508.70, 464.00, 'microondas_espelhado.jpg', 'Philco'),
(default ,'3', 'microondas', 'Microondas Eletrolux 20L Branco/Vidro 127v', 459.99, 436.05, 'microondas_eletrolux.jpg', 'Eletrolux'),
(default ,'4', 'lavaroupas', 'Lava-Roupas Brastemp 11Kg Turbo Perfomance', 1699.00, 1214.10, 'lavadora_brastemp.jpg', 'Brastemp'),
(default ,'4', 'lavaroupas', 'Lava-Roupas Philco Lava&Seca 12Kg', 2399.00, 2179.90, 'lavadora_philco.jpg', 'Philco'),
(default ,'5', 'lavaloucas', 'Lava-Louças Eletrolux Inox com Painel Blue Touch', 3599.00, 2799.00, 'lavalouca_eletrolux.jpg', 'Eletrolux'), 	
(default ,'5', 'lavaloucas', 'Lava-Louças Brastemp Compacta Branca 127V', 1970.59, 1730.61, 'lavalouca_brastemp.jpg', 'Brastemp');

create table comentarios(
id int primary key auto_increment,
nome varchar(80),
msg varchar (200),
data datetime default now()
);

create table categorias (

id_categoria int not null primary key AUTO_INCREMENT,
categoria varchar(60) not null

) default charset = utf8;

ALTER TABLE produtos ADD CONSTRAINT FOREIGN KEY (id_categoria) REFERENCES categorias (id_categoria);

insert into categorias values 
(default, 'Geladeira'),
(default, 'Fogão'),
(default, 'Microondas'),
(default, 'Lava Roupas'),
(default, 'Lava Louças');




