DROP DATABASE IF EXISTS Ebytr;

CREATE DATABASE Ebytr;

USE Ebytr;

CREATE TABLE
    list (
        id INT NOT NULL auto_increment,
        tarefa VARCHAR(100) NOT NULL,
        status VARCHAR(30) NOT NULL,
        data_cadastro DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
        PRIMARY KEY(id)
    ) ENGINE = INNODB;