const express = require('express') // o express cria uma servidor que mostra o que estamos construindo dentro do navegador
const app = express()

app.set("view engine", "ejs") //dessa forma, o server espera que estejamos rodando um arquivo .ejs dentro de uma pasta chamada views, por isso a necessidade de criar a pasta views e transferir o index.ejs para dentro dela

//criando uma rota - o app carrega tudo que está dentro do express, o get é um método que está dentro do express e o restante é a rota, sendo que o que o res dará como resposta, por assim dizer, será renderizar o index(index.ejs).
app.get("/", function (req, res){
  res.render("index")
}) 

app.get("/about", function (req, res){
  res.render("about")
}) 

//rodando o servidor - o listen é uma função que existe dentor do express que "ouve" uma porta que, nesse caso, é a 8080. 
app.listen(8080)
console.log("rodando")