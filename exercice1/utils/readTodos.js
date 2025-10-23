import { readFile } from 'fs/promises'

export const readTodos = async () => {
    try{
        const content = await readFile('exercice1/todos.json', 'utf-8')
        return JSON.parse(content);
    }catch(error){
        if(error.code === 'ENOENT'){
            return [];
        }
        throw error
    }
}