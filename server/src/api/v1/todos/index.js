const express = require('express');
const router = express.Router();
const controller = require('./todo.controller');

router.post('/', controller.createTodo);
router.delete('/:id', controller.removeTodo);
router.put('/', controller.updateTodo);
router.get('/:id', controller.getTodoByID);
router.get('/', controller.getTodos);

module.exports = router;
