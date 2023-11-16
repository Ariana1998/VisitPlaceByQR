const { Schema, model } = require('mongoose');
const categoriaSchema = new Schema({
    nombre: {
        type: String,
        required: true,
        trim: true,
        unique: true
    }
});

module.exports = model('Categoria', categoriaSchema);