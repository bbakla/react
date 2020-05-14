import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  function customHook(number) {
    return number * 2;
  }

  const [count, setCount] = useState(0);
  const[count2, setCount2] = useState(2);
  const[count3, setCount3] = useState( customHook(100));

  useEffect(() => {
    document.title = `count=${count}\t count2=${count2}`;
  });

  return (
    <div className="App">
      <header className="App-header">

        <button onClick={() => setCount(count +1)}>{count}</button>
        <button onClick={() => setCount2(count2 + 1)}>{count2}</button>
        <button onClick={() => setCount3(count3 + 5)}>{count3}</button>

      </header>
    </div>
  );
}

export default App;
