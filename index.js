const express = require("express");
const app = express();
const data = require("./data.json");

app.use(express.json());

//Listar todos os usuários
app.get("/users", function(req, res) {
  res.json(data);
});


//Listar um usuário por ID
app.get("/users/:id", function(req, res) {
  const { id } = req.params;
  const user = data.find(cli => cli.id == id);

  if (!user) return res.status(204).json();

  res.json(user);
});


//Criar Usuário
app.post("/users", function(req, res) {
  const { id, nome, sobrenome, idade, sexo } = req.body;

  // Salvar

  res.json({ id, nome, sobrenome, idade, sexo });
});

//Atualizar dados do usuário
app.put("/users/:id", function(req, res) {
  const { id } = req.params;
  const user = data.find(cli => cli.id == id);

  if (!user) return res.status(204).json();

  const { nome } = req.body;

  user.nome = nome;

  res.json(user);
});

// Deletar Usuário
app.delete("/users/:id", function(req, res) {
  const { id } = req.params;
  const usersFiltered = data.filter(user => user.id != id);

  res.json(usersFiltered);
});

// Porta Utilizada
app.listen(3000, function() {
  console.log("O servidor está rodando!");
});