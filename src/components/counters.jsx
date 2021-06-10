import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
 
  render() {
    return (
      <div>
        <h2>Counters component</h2>
        <button onClick={this.handleReset} className="btn btn-sm btn-warning">
          Reset counters
        </button>
        {this.state.counters.map((c) => (
          <Counter
            key={c.id}
            counter={c}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;