/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import '../index.css';
import Buttons from './Buttons';
import Output from './Output';

// eslint-disable react/prefer-stateless-function
export default class Calculator extends React.Component {
  render() {
    return (
      <div className="calculator-grid">
        <Output
          total={this.props.total}
          operation={this.props.operation}
          next={this.props.next}
        />
        <Buttons
          clickHandler={this.props.clickHandler}
        />
      </div>
    );
  }
}
