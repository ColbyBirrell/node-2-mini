const express = require('express')
const bc = require('./controllers/books_controller')

const app = express()
let PORT = 4000

app.use(express.json())


app.get('/api/books', bc.read)
app.post('/api/books', bc.create)
app.put('/api/books/:id', bc.update)
app.delete('/api/books/:id', bc.delete)






app.listen(PORT, () => {
    console.log(`<---Server is listening on ${PORT}--->`)
})