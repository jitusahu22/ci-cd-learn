import { useState } from 'react'
import './App.css'

function App() {
  const [display, setDisplay] = useState('0');

  const handleNumber = (num) => {
    setDisplay((prev) => (prev === '0' ? String(num) : prev + num));
  };

  const handleOperator = (op) => {
    setDisplay((prev) => prev + ' ' + op + ' ');
  };

  const calculate = () => {
    try {
      // Using Function constructor as a safer alternative to eval() for simple math
      const result = new Function(`return ${display}`)();
      setDisplay(String(result));
    } catch {
      setDisplay('Error');
    }
  };

  const clear = () => setDisplay('0');

  return (
    <>
      <section id="center">
        <div className="calculator-container">
          <h1>React Calc</h1>
          
          {/* Display Screen */}
          <div className="calc-display">
            {display}
          </div>

          {/* Buttons Grid */}
          <div className="calc-grid">
            <button onClick={clear} className="btn-special">AC</button>
            <button onClick={() => handleOperator('/')} className="btn-op">÷</button>
            <button onClick={() => handleOperator('*')} className="btn-op">×</button>
            
            <button onClick={() => handleNumber(7)}>7</button>
            <button onClick={() => handleNumber(8)}>8</button>
            <button onClick={() => handleNumber(9)}>9</button>
            <button onClick={() => handleOperator('-')} className="btn-op">-</button>
            
            <button onClick={() => handleNumber(4)}>4</button>
            <button onClick={() => handleNumber(5)}>5</button>
            <button onClick={() => handleNumber(6)}>6</button>
            <button onClick={() => handleOperator('+')} className="btn-op">+</button>
            
            <button onClick={() => handleNumber(1)}>1</button>
            <button onClick={() => handleNumber(2)}>2</button>
            <button onClick={() => handleNumber(3)}>3</button>
            <button onClick={calculate} className="btn-equal">=</button>
            
            <button onClick={() => handleNumber(0)} className="btn-zero">0</button>
            <button onClick={() => handleNumber('.')}>.</button>
          </div>
        </div>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <h2>React 19 + Vite</h2>
          <p>Powered by modern Node 20+ CI/CD</p>
        </div>
      </section>
    </>
  )
}

export default App
