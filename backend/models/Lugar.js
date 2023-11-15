const { Schema, model } = require('mongoose');
const fs = require("fs");
const qrcode = require("qrcode");
const lugarSchema = new Schema({
    nombre: {
        type: String,
        required: true,
        trim: true,
    },
    ImageQrUrl: {
        type: String,
    },
    categoriasPermitidas: {
        type: [String],
        required: true
    }
});

lugarSchema.pre('save', async function(next){
    const url =`http://localhost:4000/api/registro/into?lugar=${this._id}&visitante=`
    const QR = await qrcode.toDataURL(url)
    this.ImageQrUrl = QR
})


module.exports = model('Lugar', lugarSchema);