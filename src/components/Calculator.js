import React from 'react';
import '../index.css';

function Calculator() {
  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="operand">0</div>
      </div>
      <button type="button">AC</button>
      <button type="button">+/-</button>
      <button type="button">%</button>
      <button type="button" className="sign">÷</button>
      <button type="button">7</button>
      <button type="button">8</button>
      <button type="button">9</button>
      <button type="button" className="sign">x</button>
      <button type="button">4</button>
      <button type="button">5</button>
      <button type="button">6</button>
      <button type="button" className="sign">-</button>
      <button type="button">1</button>
      <button type="button">2</button>
      <button type="button">3</button>
      <button type="button" className="sign">+</button>
      <button type="button" className="span_two">0</button>
      <button type="button">.</button>
      <button type="button" className="sign">=</button>
    </div>
  );
}

export default Calculator;
