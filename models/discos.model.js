const mongoose = require('mongoose');

const DiscosSchema = mongoose.Schema({
    titulo: String,
    artista: String,
    ano: String,
    genero: String,
    gravadora: String,
}, {
    timestamps: true
});

module.exports = mongoose.model('Discos', DiscosSchema);