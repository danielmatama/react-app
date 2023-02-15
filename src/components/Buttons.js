/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';

export default class Buttons extends React.Component {
  render() {
    return (
      <div className="btn-subgrid">
        <button type="button" onClick={() => this.props.clickHandler('AC')}>AC</button>
        <button type="button" onClick={() => this.props.clickHandler('+/-')}>+/-</button>
        <button type="button" onClick={() => this.props.clickHandler('%')}>%</button>
        <button type="button" className="sign" onClick={() => this.props.clickHandler('÷')}>÷</button>
        <button type="button" onClick={() => this.props.clickHandler('7')}>7</button>
        <button type="button" onClick={() => this.props.clickHandler('8')}>8</button>
        <button type="button" onClick={() => this.props.clickHandler('9')}>9</button>
        <button type="button" className="sign" onClick={() => this.props.clickHandler('x')}>x</button>
        <button type="button" onClick={() => this.props.clickHandler('4')}>4</button>
        <button type="button" onClick={() => this.props.clickHandler('5')}>5</button>
        <button type="button" onClick={() => this.props.clickHandler('6')}>6</button>
        <button type="button" className="sign" onClick={() => this.props.clickHandler('-')}>-</button>
        <button type="button" onClick={() => this.props.clickHandler('1')}>1</button>
        <button type="button" onClick={() => this.props.clickHandler('2')}>2</button>
        <button type="button" onClick={() => this.props.clickHandler('3')}>3</button>
        <button type="button" className="sign" onClick={() => this.props.clickHandler('+')}>+</button>
        <button type="button" className="span_two" onClick={() => this.props.clickHandler('0')}>0</button>
        <button type="button" onClick={() => this.props.clickHandler('.')}>.</button>
        <button type="button" className="sign" onClick={() => this.props.clickHandler('=')}>=</button>
      </div>
    );
  }
}
