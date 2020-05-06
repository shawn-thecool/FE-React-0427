import React from 'react';
import Counter from './components/features/Counter';
import Todos from './components/todo/Todos';
import './assets/css/reset.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Todos />
        <Counter />
      </header>
    </div>
  );
}

export default App;
