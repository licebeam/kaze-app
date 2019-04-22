import React, { Component } from 'react';
import styled from 'styled-components';
import SetSelect from './components/SetSelect';
import Card from './components/Card';
import './App.css';
import core100 from './json-data/core1000/core100';

const Container = styled.div`
  margin: 0 auto;
  height: 100vh;
  width: 50%;
  display: flex;
  flex-direction: column;
`

let timerId = null;

class App extends Component {
  state = {
    title: 'Core 1000',
    cards: core100,
    place: 0,
    timer: false,
    cardsGood: null,
    cardsSkipped: null,
    cardsBad: null,
    goodCardData: [],
    badCardData: [],
    currentSet: 'core100'
  }

  changeSet = (cards, set) => {
    this.setState({
      cards: cards,
      currentSet: set,
      place: 0,
      timer: false,
      cardsGood: null,
      cardsSkipped: null,
      cardsBad: null
    }, () => {
      this.stopTimer();
    });
  }

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
    clearTimeout(timerId)
    this.setState({ timer: true }, () => {
      if (this.state.timer) {
        timerId = setTimeout(() => {
          this.updateCardData('skip')
        }, time)
      }
    })
  }

  stopTimer = () => {
    clearTimeout(timerId)
    this.setState({ timer: false })
  }

  updateCardData = (type) => {
    const { cardsGood, cardsBad, cardsSkipped } = this.state;
    switch (type) {
      case 'good':
        this.setState({ cardsGood: cardsGood + 1 }, () => { this.saveCardToStorage('good'); this.updatePlace(1) })
        break;
      case 'bad':
        this.setState({ cardsBad: cardsBad + 1 }, () => { this.saveCardToStorage('bad'); this.updatePlace(1) })
        break;
      case 'skip':
        this.setState({ cardsSkipped: cardsSkipped + 1 }, () => { this.saveCardToStorage('bad'); this.updatePlace(1) })
        break;

      default:
        break;
    }
  }

  saveCardToStorage = (type) => {
    let { goodCardData, badCardData, place, title, currentSet, cards } = this.state;
    if (type === 'good') {
      goodCardData.push(
        {
          id: cards[place].id,
          date: Date.now(),
          group: title,
          set: currentSet
        }
      )
      this.setState({ goodCardData }, () => {
        return localStorage.setItem('goodCardData', JSON.stringify(goodCardData))
      })
    } else {
      badCardData.push(
        {
          id: cards[place].id,
          date: Date.now(),
          group: title,
          set: currentSet
        }
      )
      this.setState({ badCardData }, () => {
        return localStorage.setItem('badCardData', JSON.stringify(badCardData))
      })
    }
  }

  render() {
    const { cards, place, timer, cardsGood, cardsBad, cardsSkipped, title } = this.state;
    return (
      <Container className="App">
        <h2>{title}</h2>
        <div>
          <select onChange={(e) => this.setState({ title: e.target.value })}>
            <option value='Core 1000'>Core 1000</option>
            {/* <option value='Core 2000'>Core 2000</option>
            <option value='Core 3000'>Core 3000</option> */}
          </select>
        </div>
        <SetSelect title={title} changeSet={this.changeSet} />
        <Card cards={cards} place={place} startTimer={this.startTimer} stopTimer={this.stopTimer} timer={timer} />
        <button onClick={() => this.updateCardData('skip')}>Skip</button>
        <button onClick={() => this.updateCardData('bad')}>Hard</button>
        <button onClick={() => this.updateCardData('good')}>Easy</button>
        <div>Score: {cardsGood || '0'}/100</div>
        <div>Hard: {cardsBad || '0'}/100</div>
        <div>Skipped: {cardsSkipped || '0'}/100</div>
      </Container >
    );
  }
}

export default App;
