//importar o dotenv (biblioteca de variáveis de ambiente - definidas no arquivo .env)
require("dotenv").config();

//importar o express
const express = require("express");

//criar o app
const app = express();

//configurar 
app.use(express.json());


//"porteiro" (a porta está definida no arquivo. env)
app.listen(Number(process.env.PORT), () => {
    console.log(`Server up and running at port ${process.env.PORT}.`)
})
