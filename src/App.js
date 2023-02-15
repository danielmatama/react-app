import React from 'react';
import Calculator from './components/Calculator';
import calculate from './logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '0',
      next: null,
      operation: null,
    };
  }

  clickHandler = (event) => {
    this.setState((initialState) => calculate(initialState, event));
  };

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="App">
        <Calculator
          total={total}
          next={next}
          operation={operation}
          clickHandler={this.clickHandler}
        />
      </div>
    );
  }
}

export default App;
