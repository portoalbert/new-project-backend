const express = require("express");
const db = require("./data/database");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 8080;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
  console.log("someone acessing server");
});

app.get("/items", (req, res) => {
  res.status(200).json({ items: db.getItems() });
});

app.post("/item", (req, res) => {
  db.addItems(req.body.id, req.body.name, req.body.author, req.body.pages);
  res.status(200).json({ items: db.getItems() });
});

app.put("/item/:id", (req, res) => {
  const { id } = req.params;
  db.putItems(id, req.body.name, req.body.author, req.body.pages);
  console.log("Put request", req.body);
  res.status(200).json({ items: db.getItems() });
});

app.delete("/item/:id", (req, res) => {
  const { id } = req.params;
  const items = db.deleteItem(id);
  return res.status(200).json({ items });
});

// npx create-react-app clienttutorial

app.listen(port);

// computador
// brwoser
// www.google.com - enter

// www.google.com -> Computador do Hebert, quer acessar o google
// ip -> SERVIDOR (API)
// API do google.com, hebert quer acessar a rota '/'
// processa o request, e envia uma resposta para o hebert
// MVC -> Model, View, Controller

// GET -> requisição
// POST -> envio de dados ( novos dados / atualização de dados)
// PUT -> atualização de dados
// DELETE -> deletar dados

// CRUD
// Create
// Read
// Update
// Delete
