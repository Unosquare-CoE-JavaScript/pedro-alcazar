import { RequestHandler } from 'express-serve-static-core'
import { Todo } from '../models/todo';


const TODOS: Todo[] = [];

/* 
    Add new element in TODOS Array, 
    In this example only create new Todo with random id
    Only receive text data
 */export const createTodo: RequestHandler = (req, res, next) => {
    const text = req.body.text
    const newTodo = new Todo(Math.random().toString(), text)

    TODOS.push(newTodo)

    res.status(201).json({message: 'Crated the todo', createdTodo: newTodo})
}

/* 
    Getting data from TODO Array
 */
export const getTodo: RequestHandler = (req, res,next) => {
    res.status(200).json({message: 'Getting todos', todos: TODOS})
}
/* 
    Update an index of TODOS Array, locating the index to update
 */
export const updateTodo: RequestHandler = (req, res, next) => {
    const todoId = req.params.id;

    const updatedText =  (req.body as {text: string}).text;
    const todoIndex  = TODOS.findIndex(todo => todo.id == todoId)

    TODOS[todoIndex] = new Todo(TODOS[todoIndex].id, updatedText)
    res.json({message: 'updated', updateTodo: TODOS[todoIndex]})
}
/* 
 *   Deleting an element of TODOS Array, looking the index to delete
 */
export const deleteTodo : RequestHandler = ( req, res, next ) =>{
    const todoId = req.params.id;

    const updatedText =  (req.body as {text: string}).text;
    const todoIndex  = TODOS.findIndex(todo => todo.id == todoId)

    if (todoIndex< 0 ) {
        res.status(500).json({message: "not found"})
    }

    TODOS.splice(todoIndex, 1)
    res.json({message: 'todo deleted'})
}