const mongoose = require("./conn");

const ComentarioSchema = new mongoose.Schema({
    nome: {
        type: String,
        require: true,
    },
    msg: {
        type: String,
        required: true,
    },

});

const Comentario = mongoose.model("Comentario", ComentarioSchema);

module.exports = Comentario;