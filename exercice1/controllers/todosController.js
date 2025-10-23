import crypto from 'crypto'
import fs from 'fs/promises'
import { readTodos } from '../utils/readTodos.js'

export const createTodo = async (req, res)=>{
    try{
        const { text , completed } = req.body

        if(!text.trim() || typeof completed == 'boolean'){
            return res(400).send({error: "Invalid Body"})
        }

        const id = crypto.randomUUID()

        if(typeof completed === undefined){
            completed = false;
        }

        let contentActuel = await readTodos();

        let item = {
            "id":`${id}`,
            "text":`${text}`,
            "completed":`${completed}`
        }

        contentActuel.push(item)

        contentActuel = JSON.stringify(contentActuel)

        await fs.writeFile("exercice1/todos.json", contentActuel)

        res.status(201).send({message: 'Nouvelle Todo crée'})
    }catch(err){
        console.error(error)
        res.status(500).send({
            error: 'Internal server error'
        })
    }
}



