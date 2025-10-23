import { db } from "../db/database.js"
import { questions } from "../db/schema.js"

export const getAllQuestions = async (req, res)=>{
    try{
        const results = await db.select().from(questions).orderBy('created_at', 'desc')
        
        res.status(200).json(results);
    }catch(error){
        res.status(500).send({
            error: 'Failed to query questions',
        })
    }
}

export const createQuestion = (req, res)=>{
    const { question , answer } = req.body

    if(!question || !answer){
        return res(400).send({error: "Question and answer are required"})
    }

    res.status(201).send({message: 'Question created'})
}

// pour la destructuration avec const { id }, cela fait le lien avec le nom du paramètre, on peut en prendre qu'un seul sur 2. Si /:id/:name on peut tirer les deux ou un des deux
export const deleteQuestion = (req, res)=>{
    const { id } = req.params;

    res.status(200).send({
        message: `Question ${id} deleted`
    })
}