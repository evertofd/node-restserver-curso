const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let usuarioSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es Obligatorio']

    },
    email: {
        type: String,
        required: [true, 'El correo es necesario']
    },

    password: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: false

    },
    role: {
        type: String,
        default: 'USER_ROLE'
    },
    estado: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false
    }
});


module.exports = mongoose.model('Usuario', usuarioSchema);