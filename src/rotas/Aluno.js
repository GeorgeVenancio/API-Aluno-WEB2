const express = require('express')
const AlunoDB = require('../modelos/Aluno')

RotaDeAluno = express.Router()

/**
 * get para listar todos os alunos
 */
RotaDeAluno.get('/alunos', async (req, res) => {
    try {
        const alunos = await AlunoDB.find({})
        res.json(alunos);
    } catch (error) {
        res.json({erro: 'Recurso inacesivél'})
    }
})

/**
 * pegar um aluno por id
 */
RotaDeAluno.get('/aluno/:id', async (req, res) => {
    try {
        const aluno = await AlunoDB.findOne({_id: req.params.id})
        res.json(aluno)
    } catch (error) {
        res.json({erro: 'Recurso inacesivél'})
    }
})

/**
 * criar um novo aluno
 * corpo json:
 * {
 *  "nome": "NOME DO ALUNO",
 *  "email": "EMAIL DO ALUNO",
 *  "telefone": "NUMERO DO ALUNO"
 * }
 */
RotaDeAluno.post('/novoaluno', async (req, res) => {
    try {
        await AlunoDB.create(req.body)
        res.json({mensagem: 'Aluno criado com sucesso'})
    } catch (error) {
        res.json({mensagem: 'Erro no cadastro'})
    }
})

/**
 * put para atualizar aluno
 * enviar id na requisição
 * corpo json:
 * {
 *  "nome": "NOVO NOME DO ALUNO",
 *  "email": "NOVO EMAIL DO ALUNO",
 *  "telefone": "NOVO NUMERO DO ALUNO"
 * }
 */
RotaDeAluno.put('/atualizaraluno/:id', async (req, res) => {
    try {
        await AlunoDB.updateOne({_id: req.params.id}, req.body)
        res.json({mensagem: 'Aluno atualizado com sucesso'})
    } catch (error) {
        res.json({erro: 'Recurso inacesivél'})
    }
});

/**
 * apagar aluno por id
 */
RotaDeAluno.delete('/apagaraluno/:id', async (req, res) => {
    try {
        await AlunoDB.deleteOne({_id: req.params.id});
        res.json({mensagem: 'Aluno excluído com sucesso'}); 
    } catch (error) {
        res.json({erro: 'Recurso inacesivél'});
    }
});

module.exports = RotaDeAluno;