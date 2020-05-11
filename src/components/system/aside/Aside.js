import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleAside } from './_action';

function Aside({ categories = [] }) {
  const dispatch = useDispatch();

  const isAsideOpen = useSelector(state => state.aside.isAsideOpen);

  return (
    <aside className={'aside' + (isAsideOpen ? '' : ' hide')}>
      <button onClick={() => dispatch(toggleAside())}>click</button>
      <strong>global navigation</strong>
      <ul className="list_category">
        {categories.map(category => (
          <li key={category.id}>
            <span>{category.name}</span>
            <span>{category.to}</span>
            <span>{String(category.isActive)}</span>
            <span>{String(category.hasNew)}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Aside;
