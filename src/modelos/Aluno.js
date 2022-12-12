const mongoose = require('mongoose');

const SchemaDeAluno = mongoose.Schema({
    nome: String,
    email: String,
    telefone: String,
});

module.exports = mongoose.model('Aluno', SchemaDeAluno);