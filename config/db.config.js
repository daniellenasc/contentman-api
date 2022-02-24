// aqui será feita a configuração do banco de dados

//importar o mongoose
const mongoose = require("mongoose");

//criar função assíncrona de conexão (porque vai sair do server, ir até o banco de dados e depois voltar - retornará uma promise, e temos que aguardar o retorno dela)
async function connect() {

    try {

        //para se conectar ao banco de dados através do mongoose, usando o método do próprio mongoose
        //método .connect(1ª PARÂMETRO:endereço do banco de dados, 2º PARÂMETRO: objeto de configuração)
        //o endereço do banco de dados será uma variável de ambiente no .env (MONGODB_URI=mongodb://localhost:27017/contentman-api)
        //o objeto de configuração, já foi passado como uma "default", das configurações do mongoose, mas algumas coisas precisam ser ajustadas!
        const connection = await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected do DB:", connection.connection.name)

    } catch (err) {
        console.error("Database connection error:", err);
    }
}

//a função connect será executada no app.js!

//exportar a função de conexão
module.exports = connect;