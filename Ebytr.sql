DROP DATABASE IF EXISTS Ebytr;

CREATE DATABASE Ebytr;

USE Ebytr;

CREATE TABLE
    list (
        id INT NOT NULL auto_increment,
        tarefa VARCHAR(100) NOT NULL,
        status INT NOT NULL,
        data_cadastro DATETIME DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY(id)
    ) ENGINE = INNODB;