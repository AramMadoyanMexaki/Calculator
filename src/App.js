import { useState } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState('');

  const handleNumberClick = (e) => {
    setValue(value + e.target.value);
  };

  const handleEqualsClick = () => {
    try {
      const result = eval(value);
      setValue(result.toString());
    } catch (error) {
      setValue('Error');
    }
  };

  const handleClearClick = () => {
    setValue('');
  };

  return (
    <div className="App">
      <div className="value">
        <input className="number_value" value={value} type="text" readOnly />
      </div>
      <div className="numbers">
        <div className="number">
          <button value={7} onClick={handleNumberClick}>
            7
          </button>
          <button value={4} onClick={handleNumberClick}>
            4
          </button>
          <button value={1} onClick={handleNumberClick}>
            1
          </button>
          <button value="." onClick={handleNumberClick}>
            .
          </button>
        </div>
        <div className="number">
          <button value={8} onClick={handleNumberClick}>
            8
          </button>
          <button value={5} onClick={handleNumberClick}>
            5
          </button>
          <button value={2} onClick={handleNumberClick}>
            2
          </button>
          <button value={0} onClick={handleNumberClick}>
            0
          </button>
        </div>
        <div className="number">
          <button value={9} onClick={handleNumberClick}>
            9
          </button>
          <button value={6} onClick={handleNumberClick}>
            6
          </button>
          <button value={3} onClick={handleNumberClick}>
            3
          </button>
          <button onClick={handleEqualsClick}>=</button>
        </div>
        <div className="number operators">
          <button value="/" onClick={handleNumberClick}>
            /
          </button>
          <button value="*" onClick={handleNumberClick}>
            *
          </button>
          <button value="+" onClick={handleNumberClick}>
            +
          </button>
          <button value="-" onClick={handleNumberClick}>
            -
          </button>
        </div>
      </div>
      <button className="clear" onClick={handleClearClick}>
        Clear
      </button>
    </div>
  );
}

export default App;
