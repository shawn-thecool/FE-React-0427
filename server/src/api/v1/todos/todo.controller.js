const model = require('./todo.model');

// POST
const createTodo = (req, res) => res.json(model.createTodo());
// DELETE
const removeTodo = (req, res) => res.json(model.removeTodo(req.params.id));
// PUT
const updateTodo = (req, res) => res.json(model.updateTodo(req.body));
// GET
const getTodos = (req, res) => res.json(model.getTodos());
const getTodoByID = (req, res) => res.json(model.getTodoById(req.params.id));

module.exports = {
  createTodo,
  removeTodo,
  updateTodo,
  getTodos,
  getTodoByID
};
