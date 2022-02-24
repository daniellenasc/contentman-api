//importar o mongoose
const mongoose = require("mongoose");

//para acessar o Schema do mongoose:
const Schema = mongoose.Schema;

//criando o Schema:
//contentScheema é um objeto que estará instanciando a classe Schema,
//o Schema receberá um objeto de parâmetro, como se fosse o 'constructor' de uma classe, e esse objeto conterá os campos que queremos guardar
const contentScheema = new Schema({
    contentName: { type: String, maxlength: 64, required: true, trim: true },
    img: { type: String },
    contentBody: { type: String, required: true }
});

//exportar o schema
//.model(1º parâmetro: "nome do modelo"(nome do arquivo), 2º Parâmetro: o schema)
// = exportando um modelo (.model), que tem o nome "Content" (1º parâmetro), e segue a receita do contentScheema (2º parâmetro)
module.exports = mongoose.model("Content", contentScheema)
