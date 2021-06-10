import React, { Component } from 'react';

class Counter extends Component {
  render() {
    // console.log('this.props', this.props);
    return (
      <div className="mt-4">
        <span className="mr-3"># {this.props.counter.id}</span>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <div className="btn-group">
          <button
            onClick={() => this.props.onIncrement('btn_1', this.props.counter)}
            className="btn btn-warning"
          >
            +
          </button>
          <button
            onClick={() => this.props.onIncrement('btn_2', this.props.counter)}
            className="btn btn-info"
          >
            -
          </button>
        </div>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm ml-5"
        >
          Delete me please
        </button>
      </div>
    );
  }

  renderColors() {
    return this.props.counter.colors.map((color) => (
      <li key={color} style={{ background: color }} className="list-group-item">
        {color}
      </li>
    ));
  }
  getBadgeClasses() {
    let badgeClasses = 'badge mr-3 badge-';
    badgeClasses += this.props.counter.value === 0 ? 'danger' : 'info';
    return badgeClasses;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? 'Out of stock' : count;
  }
}

export default Counter;