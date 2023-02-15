/* eslint-disable react/state-in-constructor */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import Calculator from './components/Calculator';
import calculate from './logic/calculate';

export default class App extends React.Component {
    state = {
      total: '0',
      next: null,
      operation: null,
    };

  clickHandler = (event) => {
    this.setState((initialState) => calculate(initialState, event));
  }

  render() {
    return (
      <div className="App">
        <Calculator
          total={this.state.total}
          next={this.state.next}
          operation={this.state.operation}
          clickHandler={this.clickHandler}
        />
      </div>
    );
  }
}
