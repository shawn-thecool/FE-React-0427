import React from 'react';
import { Counter } from './features/counter/Counter';
import Todos from './components/todo/Todos';
import './assets/css/reset.css';

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
