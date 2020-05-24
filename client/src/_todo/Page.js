import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTodos, createTodo } from './action';
/**
 * component
 */
function TodoPage(props) {
  const dispatch = useDispatch();

  const contents = useSelector(state => state.todo.contents);

  console.log('TodoPage-contents', contents);

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);
  /**
   * event handlers
   */
  const onUpdateTodo = id => e => console.log('update todo : ' + id);
  const onRemoveTodo = id => e => console.log('remove todo : ' + id);
  const onCreateTodo = () => e => {
    dispatch(createTodo()) 
    dispatch(getTodos())
  };

  return (
    <div className="wrap_todo">
      <div className="head_todo">
        <h2>todopage</h2>
        <button onClick={onCreateTodo()}>create</button>
      </div>
      <div className="cont_todo">
        <em className="txt_todo">todo filter</em>
        <div className="box_filter">
          <select>
            <option>no option</option>
          </select>
        </div>
        <em className="txt_todo">todo contents</em>
        <ul>
          {contents.map(cont => (
            <li key={cont.id}>
              <span>{cont.title}</span>
              <span>{cont.worker}</span>
              <button onClick={onUpdateTodo(cont.id)}>update</button>
              <button onClick={onRemoveTodo(cont.id)}>remove</button>
            </li>
          ))}
        </ul>
      </div>
      <div className="foot_todo">
        <em className="txt_todo">todo pagenation</em>
        <ol className="list_page">
          <li>
            <button>1</button>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default TodoPage;
