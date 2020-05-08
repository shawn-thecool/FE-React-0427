import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import './assets/css/reset.css';

import Counter from './components/Counter';
import { increase, decrease, increaseAsync, decreaseAsync } from './redux/counter/action.creator';

function App() {
  const dispatch = useDispatch();
  const msg = useSelector((state) => state.app.msg);
  const count = useSelector((state) => state.counter.count);

  return (
    <div className="App">
      <header className="App-header">{msg}</header>
      <main>
        <Counter
          count={count}
          onIncrement={() => dispatch(increase())}
          onDecrement={() => dispatch(decrease())}
          onIncrementAsync={() => dispatch(increaseAsync())}
          onDecrementAsync={() => dispatch(decreaseAsync())}
        />
      </main>
    </div>
  );
}

export default App;
