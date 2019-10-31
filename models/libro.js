const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const libroSchema = new Schema({
    titulo: {
        type: String,
        required: true
    },
    idioma: {
        type: String,
        required: true
    },
    anioEdicion: {
        type: Number
    },
    autor: {
        type: Schema.Types.ObjectId,
        reference: 'Autor'
    }
});

const Libro = mongoose.model('Libro', libroSchema);
module.exports = Libro;