const express = require("express")
const cors = require("cors")
const connection = require("./config/mysql/connection.js")
const conn = require("./config/mongo/conn");
const Comentario = require("./config/mongo/Comentario")
const server = express();
server.use(express.json());
server.use(cors());



server.get("/produtos", (req, res) => {
    connection.query("Select * from produtos JOIN categorias ON produtos.id_categoria = categorias.id_categoria", (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
});


server.get("/contato", async (req, res) => {
    const resultado = await Comentario.find()

    res.json(resultado)
});

server.post('/contato', async (req, res) => {
    const { nome, msg } = req.body

    let resultado = await Comentario.create({ nome, msg })

    res.json(resultado)
})

server.listen(3333)