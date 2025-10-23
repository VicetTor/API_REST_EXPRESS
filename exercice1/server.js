import express from 'express'
import todosRouter from './routers/todosRouter.js' 

const PORT = process.env.PORT || 3000

const app = express()

//express.json() vient parser le body de la requête envoyer (MiddleWare)
app.use(express.json())

app.use('/todos', todosRouter)

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})