const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const RotaDeAluno = require('./src/rotas/Aluno')
const dotenv = require("dotenv")
dotenv.config()

const app = express()
app.use(cors())

try{
    mongoose.connect(process.env.MONGODB_URI)
} catch (error) {
    console.log("Não foi possivel acessar banco de dados.")
}

app.use(express.json())
app.use(RotaDeAluno)

const porta = process.env.PORT || 3000
app.listen( porta, () => {
    console.log(`Servidor rodando em: ${porta}`)
})