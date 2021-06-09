import React, { Component } from 'react';

class Counter extends Component {
  // locali componento busena
  state = {
    count: this.props.value,
  };

  h2ElStyles = {
    background: 'tomato',
    color: 'snow',
    textAlign: 'center',
  };

  // arrow funkcija nekuria savo this
  handleIncrement = (btnId) => {
    console.log('btnId', btnId);
    // niekada nekeiciam state tiesiogiai !!!!!!
    // this.state.count++;

    let diff = btnId === 'btn_1' ? 1 : -1;

    this.setState({ count: this.state.count + diff });
  };

  render() {
    console.log('this.props', this.props);
    return (
      <div className="mt-4">
        {this.props.children}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <div className="btn-group">
          <button onClick={() => this.handleIncrement('btn_1')} className="btn btn-warning">
            +
          </button>
          <button onClick={() => this.handleIncrement('btn_2')} className="btn btn-info">
            -
          </button>
        </div>
      </div>
    );
  }

  renderColors() {
    return this.state.colors.map((color) => (
      <li key={color} style={{ background: color }} className="list-group-item">
        {color}
      </li>
    ));
  }
  getBadgeClasses() {
    let badgeClasses = 'badge mr-3 badge-';
    badgeClasses += this.state.count === 0 ? 'danger' : 'info';
    return badgeClasses;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? 'Out of stock' : count;
  }
}

export default Counter;