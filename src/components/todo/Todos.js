import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setFilter,
  addTodo,
  FILTER_TYPE
} from '../../redux/modules/todo/action';
import SelectBox from '../features/SelectBox';
import Todo from './Todo';
import NoTodo from './NoTodo';
import '../../assets/css/todoList.css';

const Todos = () => {
  const dispatch = useDispatch();
  const contents = useSelector((state) => state.todo.contents);
  const filter = useSelector((state) => state.todo.filter);

  const onAddTodo = () =>
    dispatch(
      addTodo({
        title: 'title',
        desc: 'desc',
        boss: 'boss',
        worker: 'worker'
      })
    );
  const onChangeFilter = (e) => dispatch(setFilter(e.target.value));

  return (
    <div className="comp_todo">
      <div className="head_todo">
        <strong className="tit_todo">Todo List</strong>
        <button onClick={() => onAddTodo()}>ADD</button>
        <SelectBox
          name="filter"
          option={FILTER_TYPE}
          selectedValue={filter}
          onChangeHandler={onChangeFilter}
        />
      </div>
      <div className="cont_todo">
        <ul className="list_todo">
          {contents.length > 0 ? <Todo contents={contents} /> : <NoTodo />}
        </ul>
      </div>
    </div>
  );
};

export default Todos;
