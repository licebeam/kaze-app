import React, { Component } from 'react';
import styled from 'styled-components';

let timerBarId;

const CardContainer = styled.div`
  display: flex;
  border-radius: 10px;
  flex-direction: column;
  background-color: gray;
  height: 100%; 
  .place{
    font-size: .7rem;
    padding: 10px;
  }
  .kana1{
    height:100px;
    font-size: 2rem;
    padding: 10px;
    font-weight: bold;
  }
  .kana2{
    height:100px;
    font-size: 2rem;
    padding: 10px;
    font-weight: bold;
    color: orange;
  }
  .sentences{
    font-size: 1rem;
  }
  button{
    align-self: center;
    text-align: center;
    height: 20px;
    width: 100px;
  }
`
const Section = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-content: center;
  justify-content: center; 
  text-align: center;
`
const Row = styled.div`
  display: flex;  
  align-content: center;
  justify-content: center; 
  text-align: center;
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
      <div>
        <Section>
          {!timer
            ? (<button onClick={() => { this.updateTimer(); startTimer(4000); }}>Start Timer</button>)
            : (<button onClick={() => { stopTimer(); clearInterval(timerBarId); this.setState({ timerBar: 0 }) }}>Stop Timer</button>)
          }
          <p>{timerBar || '0'}</p>
        </Section>
        <CardContainer>
          {
            flipped ? (
              <div>
                <Section className="place">
                  {place + 1} / {cards.length}
                </Section>
                <Row>
                  <Section className='kana1'>
                    <div>
                      {cards[place].kan}
                    </div>
                  </Section>
                  <Section className='kana2'>
                    <div>
                      {cards[place].tran !== 'null' ? cards[place].tran : null}
                    </div>
                  </Section>
                </Row>
                <div>Translation:</div>
                <Section className="translation">
                  {cards[place].english !== 'null' ? cards[place].english : null}
                </Section>
                <div>Sentences:</div>
                <Section className='sentences'>
                  <div>
                    {cards[place].sentences !== 'null' ? cards[place].sentences.split('。')[0] : null}
                    <br></br>
                    {cards[place].sentences !== 'null' ? cards[place].sentences.split('。')[1] : null}
                    <br></br>
                    {cards[place].sentences !== 'null' ? cards[place].sentences.split('。')[2] : null}
                  </div>
                </Section>
              </div>
            ) : (
                <div>
                  <Section className="place">
                    {place + 1} / {cards.length}
                  </Section>
                  <Row>
                    <Section className='kana1'>
                      <div>{cards[place].kan}</div>
                    </Section>
                    <Section className='kana2'>
                      <div>{cards[place].tran !== 'null' ? cards[place].tran : null}</div>
                    </Section>
                  </Row>
                  <p>Sentences:</p>
                  <Section className='sentences'>
                    <div>
                      {cards[place].sentences !== 'null' ? cards[place].sentences.split('。')[0] : null}
                      <br></br>
                      {cards[place].sentences !== 'null' ? cards[place].sentences.split('。')[1] : null}
                    </div>
                  </Section>
                </div>
              )
          }
          <button onClick={() => this.flipCard()}>Flip</button>
        </CardContainer >
      </div>
    )
  }
}

export default Card