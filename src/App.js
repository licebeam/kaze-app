import React, { Component } from 'react';
import Card from './components/Card';
import './App.css';
import core100 from './json-data/core2000/core1200';

let timerId = null;

class App extends Component {
  state = { cards: core100, place: 0, timer: false }

  updatePlace = (num) => {
    const { place } = this.state;
    if (num === 1 && place <= 98) {
      this.setState({ place: this.state.place + num })
    }
    if (num === -1 && place >= 1) {
      this.setState({ place: this.state.place + num })
    }

  }

  startTimer = (time) => {
    //TODO: protect against the length of the selected cards
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
