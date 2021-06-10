import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
 
  render() {
    return (
      <div>
        <h2>Counters component</h2>
        <button onClick={this.props.onReset} className="btn btn-sm btn-warning">
          Reset counters
        </button>
        {this.props.counters.map((c) => (
          <Counter
            key={c.id}
            counter={c}
            onIncrement={this.props.onIncrement}
            onDelete={this.props.onDelete}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;