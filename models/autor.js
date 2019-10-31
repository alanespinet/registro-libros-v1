const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const autorSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    nacionalidad: {
        type: String
    }
});

const Autor = mongoose.model('Autor', autorSchema);
module.exports = Autor;
