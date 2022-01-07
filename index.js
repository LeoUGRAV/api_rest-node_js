const express = require("express");
const app = express();

//Conexão com BD PostgreSQL

const { Client } = require("pg");
const { Connection } = require("pg/lib");
const { connectionString } = require("pg/lib/defaults");

const connection = new Client({
    host:"localhost",
    user: "postgres",
    port: 5432,
    password: "postgres",
    database: "postgres"
});


// Ler Cadastros
connection.connect(function(err){
    if (err) console.error('Erro ao realizar a conexao com BD:' + err.stack); return;
});

connection.query('select * from users', (err, res)=>{
    if(!err){
        console.log(res.rows);
    }else{
        console.log(err.message);
    }
    connection.end;
});

//Cadastrar Usuários
connection.connect(function(err){
    if (err) console.error('Erro ao realizar a conexao com BD:' + err.stack); return;
});

connection.query("INSERT INTO users (id, nome, sobrenome, sexo, idade) VALUES (7, 'Viviane', 'Sousa', 'F', 22)", function(err, result){
    if(!err){
        console.log('Usuário cadastrado com Sucesso!');
    }else{
        console.log('Erro ao cadastrar o Usuário!');
    }
});

//Atualizar Cadastro
connection.connect(function(err){
    if (err) console.error('Erro ao realizar a conexao com BD:' + err.stack); return;
});

connection.query("UPDATE users SET nome = 'Cesar' WHERE id = 6", function(err, result){
    if(!err){
        console.log('Usuário editado com Sucesso!');
    }else{
        console.log('Erro ao editar o Usuário!');
    }
});
//Deletar Cadastro
connection.connect(function(err){
    if (err) console.error('Erro ao realizar a conexao com BD:' + err.stack); return;
});

connection.query("DELETE FROM users WHERE id = 7", function(err, result){
    if(!err){
        console.log('Usuário Apagado com Sucesso!');
    }else{
        console.log('Erro ao Apagar o Usuário!');
    }
});