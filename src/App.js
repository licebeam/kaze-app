import React, { Component } from 'react';
import Card from './components/Card';
import './App.css';
import core100 from './json-data/core1000/core100';

let timerId = null;
class App extends Component {
  state = { cards: core100, place: 0, timer: false }

  updatePlace = (num) => {
    this.setState({ place: this.state.place + num })
  }

  startTimer = (time) => {
    this.setState({ timer: !this.state.timer }, () => {
      if (this.state.timer) {
        timerId = setInterval(() => {
          this.updatePlace(1);
        }, time)
      }
      if (!this.state.timer) {
        clearInterval(timerId)
      }
    })
  }

  render() {
    const { cards, place, timer } = this.state;
    return (
      <div className="App">
        <button onClick={() => this.startTimer(5000)}>{timer ? 'Stop Timer' : 'Start Timer'}</button>
        <Card cards={cards} place={place} />
        <button onClick={() => this.updatePlace(-1)}> Back </button>
        <button onClick={() => this.updatePlace(1)}>Forward</button>
      </div >
    );
  }
}

export default App;
