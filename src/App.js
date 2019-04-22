import React, { Component } from 'react';
import Card from './components/Card';
import './App.css';
import core100 from './json-data/core1000/core100';
class App extends Component {
  state = { cards: core100, place: 0 }

  updatePlace = (num) => {
    this.setState({ place: this.state.place + num })
  }

  render() {
    const { cards, place } = this.state;
    return (
      <div className="App">
        <Card cards={cards} place={place} />
        <button onClick={() => this.updatePlace(-1)}> Back </button>
        <button onClick={() => this.updatePlace(1)}>Forward</button>
      </div >
    );
  }
}

export default App;
