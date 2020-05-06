import React from 'react';
import { useDispatch } from 'react-redux';
import { updateTodo, removeTodo } from '../../redux/modules/todo/action';

const Todo = (props) => {
  const { contents } = props;
  const dispatch = useDispatch();

  // event handlers
  const onUpdateTodo = (id) =>
    dispatch(updateTodo({ id, title: 'updated title', desc: 'updated desc' }));
  const onRemoveTodo = (id) => dispatch(removeTodo(id));

  return contents.map((todo) => (
    <li key={todo.id}>
      <span>{todo.progress}</span>
      <span>{todo.id}</span>
      <span>{todo.title}</span>
      <span>{todo.desc}</span>
      <span>{todo.worker}</span>
      <span>{todo.boss}</span>
      <button onClick={() => onUpdateTodo(todo.id)}>UPDATE</button>
      <button onClick={() => onRemoveTodo(todo.id)}>REMOVE</button>
    </li>
  ));
};

export default Todo;
