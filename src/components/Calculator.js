import React from 'react';
import PropTypes from 'prop-types';
import '../index.css';
import Buttons from './Buttons';
import Output from './Output';

function Calculator(props) {
  const {
    total,
    operation,
    next,
    clickHandler,
  } = props;

  return (
    <div className="calculator-grid">
      <Output
        total={total}
        operation={operation}
        next={next}
      />
      <Buttons clickHandler={clickHandler} />
    </div>
  );
}

Calculator.propTypes = {
  total: PropTypes.string,
  operation: PropTypes.string,
  next: PropTypes.string,
  clickHandler: PropTypes.func,
};

Calculator.defaultProps = {
  total: '0',
  operation: '',
  next: '',
  clickHandler: () => {},
};

export default Calculator;
