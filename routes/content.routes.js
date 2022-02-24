//importar o express:
const express = require("express");

//criar o roteador (que vem do express):
const router = express.Router();

//importar o model (a const geralmente se chama AlgoModel)
const ContentModel = require("../models/Content.model");

//CRUD

//CREATE
//função assíncrona 
router.post("/create-content", async (req, res) => {
    try {
        const createdContent = await ContentModel.create(req.body);
        return res.status(201).json(createdContent);

    } catch(err) {
        return res.status(500).json(err);
    }
});

//exportar o roteador:
module.exports = router;