import React, { useState } from 'react';
import styles from './styles.module.css';
// import '../index.css';
import Buttons from './Buttons';
import Output from './Output';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({
    total: '0',
    next: null,
    operation: null,
  });

  const clickHandler = (event) => {
    setState({ ...state, ...calculate(state, event) });
  };

  return (
    // <div className="calculator-grid">
    <div className={styles.calculatorgrid}>
      <Output
        total={state.total}
        operation={state.operation}
        next={state.next}
      />
      <Buttons
        clickHandler={clickHandler}
      />
    </div>
  );
};

export default Calculator;
