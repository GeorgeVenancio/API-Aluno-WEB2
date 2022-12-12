# API-Aluno-WEB2

## Rotas:
### GET https://api-aluno-web2.onrender.com/alunos
    | Lista todos os alunos cadastrados.
### GET https://api-aluno-web2.onrender.com/aluno/:id
    | Lista um determinado aluno por id
### POST https://api-aluno-web2.onrender.com/novoaluno
    | Cria um novo aluno
    | corpo JSON: 
    ''' {
       "nome": "George Teste 1",
       "email": "teste@mail.com",
       "telefone": "4567890-097"
     } '''
### PUT https://api-aluno-web2.onrender.com/atualizaraluno/:id
    | Atualizar aluno por id
    | corpo JSON:
     ''' {
        "nome": "NOVO NOME DO ALUNO",
        "email": "NOVO EMAIL DO ALUNO",
        "telefone": "NOVO NUMERO DO ALUNO"
     } '''
### DELET https://api-aluno-web2.onrender.com/apagaraluno/:id
    | Apagar aluno por id
