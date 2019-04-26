import React, { Component } from 'react';
import styled from 'styled-components';

let timerBarId;

const TimerBar = styled.div`
  height: 10px;
  width: 100px;
  border: 1px solid #fafafa;
  transition: .1s all;
  .fill{
    height: 10px;
    background-color: orange;
    width: ${props => props.timerBar ? props.timerBar + '%' : '0%'};
  }
`
const CardContainer = styled.div`
  display: flex;
  border-radius: 10px;
  flex-direction: column;
  transition: .2s all;
  background-color: ${props => props.flipped ? 'black' : 'gray'};
  .card-num{
    position: absolute;
    left: 0;
    top: 0;
    font-size: .8rem;
    padding: 10px;
    font-weight: bold;
    color: orange;
  }
  .place{
    padding: 10px;
    font-size: .7rem;
  }
  .kana1{
    height:2.1rem;
    font-size: 2rem;
    padding: 10px;
    font-weight: bold;
  }
  .kana2{
    height:2.1rem;
    font-size: 2rem;
    padding: 10px;
    font-weight: bold;
    color: orange;
  }
  .translation{
    height: 20px;
    margin: 1rem;
    .text{
      font-size: 1.2rem;
      font-weight: bold;
      color: orange;
    }
  }
  .sentences{
    height: 70px;
    font-size: 1rem;
  }
  button{
    align-self: center;
    text-align: center;
    height: 20px;
    width: 100px;
    border-radius: 8px;
    margin: 10px;
      color: #fafafa;
      background-color: #282c34;
      transition: .2s all;
      &:hover{
        color: #282c34;
        background-color: #fafafa;
      }
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
    timerBar: 0,
  }

  flipCard = () => {
    clearInterval(timerBarId);
    this.props.stopTimer();
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
      timerBar,
    } = this.state;

    return (
      <div>
        <CardContainer flipped={flipped}>
          <div className="card-num">Card: {cards[place].id}</div>
          <Section className="timer-section">
            {!timer
              ? (<button onClick={() => { this.updateTimer(); startTimer(4000); }}>Start Timer</button>)
              : (<button onClick={() => { stopTimer(); clearInterval(timerBarId); this.setState({ timerBar: 0 }) }}>Stop Timer</button>)
            }
            <TimerBar timerBar={timerBar}><div className='fill' /></TimerBar>
          </Section>
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
                <Section className="translation">
                  <div>Translation:</div>
                  <div className="text">{cards[place].english !== 'null' ? cards[place].english : null}</div>
                </Section>
                <Section className='sentences'>
                  <div>
                    {cards[place].sentences !== 'null' ? cards[place].sentences.split('。')[0] : '-'}
                    <br></br>
                    {cards[place].sentences !== 'null' ? cards[place].sentences.split('。')[1] : '-'}
                    <br></br>
                    {cards[place].sentences !== 'null' ? cards[place].sentences.split('。')[2] : '-'}
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
                  <Section className="translation">
                    {/* <div>Translation:</div>
                    {cards[place].english !== 'null' ? cards[place].english : null} */}
                  </Section>
                  <Section className='sentences'>
                    <div>
                      {cards[place].sentences !== 'null' ? cards[place].sentences.split('。')[0] : '-'}
                      <br></br>
                      {cards[place].sentences !== 'null' ? cards[place].sentences.split('。')[1] : '-'}
                      <br></br>
                      <div>-</div>
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