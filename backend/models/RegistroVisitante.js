const { Schema, model } = require('mongoose');
const registroVisitanteSchema = new Schema({
    visitante: {
        type: String,
        required: true,
        trim:true
    },
    lugar: {
        type: String,
        required: true
    },
   fechaEntrada: {
        type: Date,
        default: Date.now
    },
    fechaSalida: {
        type: Date,
        default: Date.now
    },
    entrada: {
        type: Boolean,
        required: true,
        default: true
    },
    salida: {
        type: Boolean,
        required: true,
        default: false
    }
});
module.exports = model('RegistroVisitante', registroVisitanteSchema);
