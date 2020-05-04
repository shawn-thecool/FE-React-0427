import React from 'react';
import { Counter } from './features/counter/Counter';
import Todos from './components/TodoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <hr />
        <Todos />
      </header>
    </div>
  );
}

export default App;
