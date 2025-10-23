import { Router } from "express"
import { createTodo } from "../controllers/todosController.js"

const router = Router()

router.post('/', createTodo)

export default router