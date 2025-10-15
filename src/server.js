// import http from 'http'

// const PORT = process.env.PORT || 3000

// const server = http.createServer((req, res) => {
//     res.end('Hello World!')
// })

// server.listen(PORT, () => {
//     console.log(`Server running on http://localhost:${PORT}`)
// })


import express from 'express'

const PORT = process.env.PORT || 3000

const app = express()

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})

app.use(express.json())

app.get('/questions', (req, res)=>{
    res.status(200).send([
        {
            id:"1",
            question:"Quelle est la capitale de la France ?",
            answer:"Paris"
        },
    ])
})

// /questions avec un s car on accède à la ressouce qui est une liste et on y ajoute une question
app.post('/questions', (req, res)=>{
    const { question , answer } = req.body

    if(!question || !answer){
        return res(400).send({error: "Question and answer are required"})
    }

    res.status(201).send({message: 'Question created'})
})