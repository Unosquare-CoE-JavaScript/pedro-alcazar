"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.updateTodo = exports.getTodo = exports.createTodo = void 0;
const todo_1 = require("../models/todo");
const TODOS = [];
/*
    Add new element in TODOS Array,
    In this example only create new Todo with random id
    Only receive text data
 */ const createTodo = (req, res, next) => {
    const text = req.body.text;
    const newTodo = new todo_1.Todo(Math.random().toString(), text);
    TODOS.push(newTodo);
    res.status(201).json({ message: 'Crated the todo', createdTodo: newTodo });
};
exports.createTodo = createTodo;
/*
    Getting data from TODO Array
 */
const getTodo = (req, res, next) => {
    res.status(200).json({ message: 'Getting todos', todos: TODOS });
};
exports.getTodo = getTodo;
/*
    Update an index of TODOS Array, locating the index to update
 */
const updateTodo = (req, res, next) => {
    const todoId = req.params.id;
    const updatedText = req.body.text;
    const todoIndex = TODOS.findIndex(todo => todo.id == todoId);
    TODOS[todoIndex] = new todo_1.Todo(TODOS[todoIndex].id, updatedText);
    res.json({ message: 'updated', updateTodo: TODOS[todoIndex] });
};
exports.updateTodo = updateTodo;
/*
 *   Deleting an element of TODOS Array, looking the index to delete
 */
const deleteTodo = (req, res, next) => {
    const todoId = req.params.id;
    const updatedText = req.body.text;
    const todoIndex = TODOS.findIndex(todo => todo.id == todoId);
    if (todoIndex < 0) {
        res.status(500).json({ message: "not found" });
    }
    TODOS.splice(todoIndex, 1);
    res.json({ message: 'todo deleted' });
};
exports.deleteTodo = deleteTodo;
