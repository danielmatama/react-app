/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';

export default class Output extends React.Component {
  render() {
    const { total, next, operation } = this.props;
    return (
      <div className="output">
        <div className="operand">
          <p>
            { total }
            { operation }
            { next }
          </p>
        </div>
      </div>
    );
  }
}
