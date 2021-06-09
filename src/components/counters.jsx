import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 10 },
      { id: 3, value: 0 },
      { id: 4, value: 11 },
    ],
  };

  render() {
    return (
      <div>
        <h2>Counters component</h2>
        {this.state.counters.map((c) => (
          <Counter key={c.id} value={c.value} oId="blue">
            <h5>This is ok counter</h5>
            <hr />
            <small className="d-block">all good</small>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;