# Ebytr_backend

:rotating_light: Para executar esse projeto é necessário:
- MySql ou docker;
- Node v16;


:desktop_computer: Para rodar na sua máquina:
 - Clone o repositório;
 - Entre na pasta do repositório que você acabou de clonar;    
 - Instale as dependências ``` npm install```;
 - Crie sua branch;
 - Se não tiver o MySQL instalado, é possível roda-lo com esse comando:  
 
    ```docker run --name meu-mysql-5_7 -e MYSQL_ROOT_PASSWORD=1234 -d -p 3306:3306 mysql:5.7 ```
 - Configure seu arquivo .env para estabelecer conexão com o banco de dados;
  ```
    MYSQL_HOST=localhost
    MYSQL_USER=root
    MYSQL_PASSWORD=1234
    MYSQL_DATABASE=Ebytr
    PORT=9000
```

 - Execute o arquivo Ebytr.sql para criar a tabela no seu banco de dados (no Workbench ou então na extensão Database do VsCode);
 - Rode o comando ``` npm run dev``` para iniciar o servidor.

Esse projeto foi criado pela Trybe com a finalidade de preparar os estudantes da turma 16 e 17 a participarem de processos seletivos, abrangendo a parte técnica e a parte de soft skills.

:arrow_right: Requisitos técnicos:  
- Front-End em React;  
- Back-End em NodeJS, com MySQL;  
- Arquitetura em camadas;  

:arrow_right: Funcionalidades:  
- Visualizar a lista de tarefas;  
- Esta lista deve ser ordenável por ordem alfabética, data de criação ou por status;  
- Inserir uma nova tarefa na lista;  
- Remover uma tarefa da lista;  
- Atualizar uma tarefa da lista;  
- A tarefa deve possuir um status editável: pendente, em andamento ou pronto; 
