let __id = 0;
let todos = [];

const createTodo = () => {
  const _id = ++__id
  todos.push({
    id: 'todo-' + _id,
    title: 'title-' + _id,
    worker: 'worker-' + _id,
    boss: null,
    desc: null,
    createdAt: new Date().toUTCString(), // {date} format YYYY-MM-DD
    updatedAt: null // {date} format YYYY-MM-DD
  });
  return { code: 201, msg: 'created todo ' + _id };
};
const removeTodo = id => {
  if (!id) return { code: 400, msg: 'need id for removing' };
  todos = todos.filter(todo => todo.id !== id);
  return { code: 200, msg: 'removed todo ' + id };
};
const updateTodo = newTodo => {
  if (!newTodo.id) return { code: 400, msg: 'need id for updating' };
  todos = todos.map(todo => {
    if (todo.id !== newTodo.id) return todo;
    return { ...todo, ...newTodo };
  });
  return { code: 200, msg: 'updated todo ' + newTodo.id };
};
const getTodos = () => {
  if (todos.length === 0) return { code: 204, msg: 'no contents', data: [] };
  return { code: 200, msg: 'get todos', data: todos };
};
const getTodoByID = id => {
  if (!id) return { code: 400, msg: 'need id for searching todo' };
  const todo = todos.find(todo => todo.id === id);
  if (!todo) return { code: 404, msg: 'not found todo' };
  return { code: 200, msg: 'get todo by id', data: todo };
};

module.exports = {
  createTodo,
  removeTodo,
  updateTodo,
  getTodos,
  getTodoByID
};
