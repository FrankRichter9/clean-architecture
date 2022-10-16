import React, { useState } from 'react';
import { Task } from './components';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      Hi {count}
      <div onClick={() => setCount(count + 1)}>
        button
      </div>
      <Task status='todo' title='Задача 1' description='test' />
    </div>
  );
}

export default App;
