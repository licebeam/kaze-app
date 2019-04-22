import React, { Component } from 'react';

let timerBarId;
class Card extends Component {
  state = {
    flipped: false,
    showKanji: true,
    showKana: true,
    showSentences: true,
    timerBar: 0,
  }

  flipCard = () => {
    this.setState({ flipped: !this.state.flipped, timerBar: 0 })
  }

  componentDidUpdate(prevProps) {
    if (prevProps.cards !== this.props.cards) {
      this.setState({ timerBar: 0 })
      clearInterval(timerBarId);
    }
    if (prevProps.place !== this.props.place) {
      this.setState({ flipped: false })
      if (this.props.timer) {
        this.setState({ timerBar: 0 }, () => {
          clearInterval(timerBarId);
          this.updateTimer()
          this.props.startTimer(4000)
        })
      }
    }
  }

  updateTimer = () => {
    timerBarId = setInterval(() => {
      this.setState({ timerBar: this.state.timerBar + 1 })
    }, 40);
  }

  render() {
    const {
      cards,
      place,
      timer,
      startTimer,
      stopTimer,
    } = this.props;

    const {
      flipped,
      showKanji,
      showKana,
      showSentences,
      timerBar,
    } = this.state;

    return (
      <div>
        {!timer
          ? (<button onClick={() => { this.updateTimer(); startTimer(4000); }}>Start Timer</button>)
          : (<button onClick={() => { stopTimer(); clearInterval(timerBarId); this.setState({ timerBar: 0 }) }}>Stop Timer</button>)
        }
        <p>{timerBar || '0'}</p>
        {
          flipped ? (
            <div>
              {cards[place].id}
              <br></br>
              {showKanji ? (
                <div>
                  {cards[place].kan}
                </div>
              ) : null}
              <button onClick={() => this.setState({ showKanji: !showKanji })}>Show/Hide</button>
              <br></br>
              {showKana ? (
                <div>
                  {cards[place].tran !== 'null' ? cards[place].tran : null}
                </div>
              ) : null}
              <button onClick={() => this.setState({ showKana: !showKana })}>Show/Hide</button>
              <br></br>
              <p>Translation:</p>
              {cards[place].english !== 'null' ? cards[place].english : null}
              {showSentences ? (
                <div>
                  <p>Sentences:</p>
                  {cards[place].sentences !== 'null' ? cards[place].sentences.split('。')[0] : null}
                  <br></br>
                  {cards[place].sentences !== 'null' ? cards[place].sentences.split('。')[1] : null}
                  <br></br>
                  {cards[place].sentences !== 'null' ? cards[place].sentences.split('。')[2] : null}
                </div>
              ) : null}
              <button onClick={() => this.setState({ showSentences: !showSentences })}>Show/Hide</button>
            </div>
          ) : (
              <div>
                {cards[place].id}
                <br></br>
                {showKanji ? (<div>{cards[place].kan}</div>) : null}
                <button onClick={() => this.setState({ showKanji: !showKanji })}>Show/Hide</button>
                <br></br>
                {showKana ? (<div>{cards[place].tran !== 'null' ? cards[place].tran : null}</div>) : null}
                <button onClick={() => this.setState({ showKana: !showKana })}>Show/Hide</button>
                <br></br>
                {showSentences ? (
                  <div>
                    <p>Sentences:</p>
                    {cards[place].sentences !== 'null' ? cards[place].sentences.split('。')[0] : null}
                    <br></br>
                    {cards[place].sentences !== 'null' ? cards[place].sentences.split('。')[1] : null}
                  </div>
                ) : null}
                <button onClick={() => this.setState({ showSentences: !showSentences })}>Show/Hide</button>
              </div>
            )
        }
        <button onClick={() => this.flipCard()}>Flip</button>
      </div >
    )
  }
}

export default Card