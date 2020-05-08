import React from 'react';

function Counter({
  count,
  onIncrement,
  onDecrement,
  onIncrementAsync,
  onDecrementAsync
}) {
  return (
    <div>
      <button onClick={onDecrementAsync}>D-1</button>
      <button onClick={onDecrement}>-1</button>
      <span>Count : {count}</span>
      <button onClick={onIncrement}>+1</button>
      <button onClick={onIncrementAsync}>D+1</button>
    </div>
  );
}

export default Counter;
