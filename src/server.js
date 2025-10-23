// import http from 'http'

// const PORT = process.env.PORT || 3000

// const server = http.createServer((req, res) => {
//     res.end('Hello World!')
// })

// server.listen(PORT, () => {
//     console.log(`Server running on http://localhost:${PORT}`)
// })


import express from 'express'
import questionsRouter from './routers/questionsRouter.js'
import usersRouter from './routers/usersRouter.js'
import logger from './middleware/logger.js'

const PORT = process.env.PORT || 3000

const app = express()

app.use(express.json())

app.use(logger)

// Request -> express.json() -> Middleware (Logger) -> Controller -> Response
// questions avec un s car on accède à la ressouce qui est une liste et on y ajoute une question ou supprime
app.use('/questions', questionsRouter)
app.use('/users', usersRouter)

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})