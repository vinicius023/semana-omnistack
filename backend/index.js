const express = require('express')

const app = express()

app.use(express.json())

// Metodos HTTP: GET, POST, PUT, DELETE

// Tipos de parametros:

// Query Params: request.query (Filtros, ordenação, paginação, ...)
// Route Params: request.params (Identificar um recurso na alteração ou remoção)
// Body: request.body (Dados para criação ou alteração de um registro)

app.get('/users', (request, response) => {
    console.log(request.query)
    return response.json({ message: 'Metodo GET' })
})

app.delete('/users/:id', (request, response) => {
    console.log(request.params)
    return response.json({ message: 'Metodo DELETE' })
})

app.put('/users', (request, response) => {
    console.log(request.body)
    return response.json({ message: 'Metodo PUT' })
})

app.listen(3333)