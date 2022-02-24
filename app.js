//importar o dotenv (biblioteca de variáveis de ambiente - definidas no arquivo .env)
require("dotenv").config();

//importar o express
const express = require("express");

//invocar a function connect do db.config (do mongoose)
require("./config/db.config")();

//criar o app
const app = express();

//configurar 
app.use(express.json());

//importar o contentRouter
const contentRouter = require("./routes/content.routes");
//toda rota "/content" que chegar, será encaminhada para contentRouter
app.use("/content", contentRouter)


//"porteiro" (a porta está definida no arquivo. env)
app.listen(Number(process.env.PORT), () => {
    console.log(`Server up and running at port ${process.env.PORT}.`)
})
