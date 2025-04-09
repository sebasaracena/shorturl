const mongoose = require('mongoose');

const DTESchema = new mongoose.Schema({
    dteId: { type: String, required: true, unique: true },
    tipoDocumento: { type: String, required: true },
    folio: { type: String, required: true },
    emisor: {
        rut: { type: String, required: true },
        razonSocial: { type: String, required: true }
    },
    receptor: {
        rut: { type: String, required: true },
        razonSocial: { type: String, required: true }
    },
    fechaEmision: { type: Date, required: true },
    montoNeto: { type: Number, required: true },
    iva: { type: Number, required: true },
    montoTotal: { type: Number, required: true }
});

// Especifica el nombre de la colección como tercer argumento
const DTEModel = mongoose.model('DTE', DTESchema, 'dte');
module.exports = DTEModel;