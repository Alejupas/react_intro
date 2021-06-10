import React, { Component } from 'react';
import Counters from './components/counters';
import NavBar from './components/navBar';

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 10 },
      { id: 3, value: 1 },
      { id: 4, value: 11 },
    ],
  };

  handleDelete = (idToDelete) => {
    // gauti state busena be to el kuris buvo paspaustas
    const countersWihtoutOne = this.state.counters.filter((c) => c.id !== idToDelete);
    // console.log(countersWihtoutOne);
    // nustatyti nauja busena su setState()
    this.setState({ counters: countersWihtoutOne });
    // console.log('whichOneClicked', idToDelete);
  };

  handleReset = () => {
    console.log('Reset please');
    //gauti busena kuri yra counters kopija kurioje visi value: 0
    const nunulinta = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    console.log(nunulinta);
    // gave nustatom busena // patikrinam ar veikia
    this.setState({ counters: nunulinta });
  };

  // arrow funkcija nekuria savo this
  handleIncrement = (plusOrMinus, counter) => {
    console.log('plusOrMinus', plusOrMinus);
    console.log('counter', counter);

    //pasidaryti counters kopija
 const countersCopy = [...this.state.counters]
    //surasti kuris counteris paprase padidinti
    const counterToIncrement = countersCopy.find(c => c.id === counter.id)
    // console.log('counterToIncrement',counterToIncrement);
    // console.log('counterToIncrement ==== counter',counterToIncrement === counter);

    //kopijoj padidinti value 1
    counterToIncrement.value++;

    //padaryti this.setState({})
    this.setState({counters: countersCopy})



    // niekada nekeiciam state tiesiogiai !!!!!!
    // this.state.count++;
    // let diff = btnId === 'btn_1' ? 1 : -1;
    
    // this.setState({ value: this.state.value + diff });
  };


  render() {
    return (
      <div className="App ">
        <NavBar />
        <main className="container mt-3">
          <Counters />
        </main>
      </div>
    );
  }
}

export default App;
