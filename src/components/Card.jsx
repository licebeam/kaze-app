import React, { Component } from 'react';
import styled from 'styled-components';

let timerBarId;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: darkgoldenrod;
  align-content: center;
  justify-content: center; 
  padding: 20px;
  .holder{
    height: 300px;
  }
`
const Section = styled.div`
  display: flex;
  flex: 1;
  align-content: center;
  justify-content: center; 
  text-align: center;
  .text-holder{
    align-self: center;
    justify-self: center; 
    text-align: center;
    flex: 8;
    height: 30px;
  }
  button{
    flex: 1;
    height: 20px;
    width: 100px;
  }
  .sentences{
    min-height: 40px;
    max-height: 40px;
  }
`
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
      <CardContainer>
        <Section>
          {!timer
            ? (<button onClick={() => { this.updateTimer(); startTimer(4000); }}>Start Timer</button>)
            : (<button onClick={() => { stopTimer(); clearInterval(timerBarId); this.setState({ timerBar: 0 }) }}>Stop Timer</button>)
          }
          <p>{timerBar || '0'}</p>
        </Section>
        {
          flipped ? (
            <div className="holder">
              <Section>
                <div className='text-holder'>
                  {place + 1} / {cards.length}
                </div>
              </Section>
              <Section>
                <div className='text-holder'>
                  {showKanji ? (
                    <div>
                      {cards[place].kan}
                    </div>
                  ) : null}
                </div>
                <button onClick={() => this.setState({ showKanji: !showKanji })}>Show/Hide</button>
              </Section>
              <Section>
                <div className='text-holder'>
                  {showKana ? (
                    <div>
                      {cards[place].tran !== 'null' ? cards[place].tran : null}
                    </div>
                  ) : null}
                </div>
                <button onClick={() => this.setState({ showKana: !showKana })}>Show/Hide</button>
              </Section>
              <Section>
                <p>Translation:</p>
                <div className='text-holder'>
                  {cards[place].english !== 'null' ? cards[place].english : null}
                </div>
              </Section>
              <Section>
                <div className='text-holder'>
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
                </div>
                <button onClick={() => this.setState({ showSentences: !showSentences })}>Show/Hide</button>
              </Section>
            </div>
          ) : (
              <div className="holder">
                <Section>
                  <div className='text-holder'>
                    {place + 1} / {cards.length}
                  </div>
                </Section>
                <Section>
                  <div className='text-holder'>
                    {showKanji ? (<div>{cards[place].kan}</div>) : null}
                  </div>
                  <button onClick={() => this.setState({ showKanji: !showKanji })}>Show/Hide</button>
                </Section>
                <Section>
                  <div className='text-holder'>
                    {showKana ? (<div>{cards[place].tran !== 'null' ? cards[place].tran : null}</div>) : null}
                  </div>
                  <button onClick={() => this.setState({ showKana: !showKana })}>Show/Hide</button>
                </Section>
                <Section>
                  <div className='text-holder'></div>
                </Section>
                <Section className='sentences'>
                  <div className='text-holder'>
                    {showSentences ? (
                      <div>
                        <p>Sentences:</p>
                        {cards[place].sentences !== 'null' ? cards[place].sentences.split('。')[0] : null}
                        <br></br>
                        {cards[place].sentences !== 'null' ? cards[place].sentences.split('。')[1] : null}
                      </div>
                    ) : null}
                  </div>
                  <button onClick={() => this.setState({ showSentences: !showSentences })}>Show/Hide</button>
                </Section>
              </div>
            )
        }
        <button onClick={() => this.flipCard()}>Flip</button>
      </CardContainer >
    )
  }
}

export default Card