const { Schema, model } = require('mongoose');
const  Bcrypt = require("bcryptjs")
const visitanteSchema = new Schema({
    nombre: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    categoria: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

visitanteSchema.pre('save', function(next) {
    if(!this.isModified("password")) {
        return next();
    }
    this.password = Bcrypt.hashSync(this.password, 10);
    next();
});

visitanteSchema.methods.comparePassword = function(plaintext, callback) {
    return callback(null, Bcrypt.compareSync(plaintext, this.password));
};

module.exports = model('Visitante', visitanteSchema);