import React, { Component } from 'react';

class Card extends Component {
  state = { flipped: false }

  flipCard = () => {
    this.setState({ flipped: !this.state.flipped })
  }

  componentDidUpdate(prevProps) {
    if (prevProps.place !== this.props.place) {
      this.setState({ flipped: false })
      if (this.props.timer) {
        this.props.startTimer(4000)
      }
    }
  }

  render() {
    const { cards, place } = this.props;
    const { flipped } = this.state;

    return (
      <div>
        {flipped ? (
          <div>
            {cards[place].id}
            <br></br>
            {cards[place].kan}
            <br></br>
            {cards[place].tran !== 'null' ? cards[place].tran : null}
            <br></br>
            <p>Translation:</p>
            {cards[place].english !== 'null' ? cards[place].english : null}
            <p>Sentences:</p>
            {cards[place].sentences !== 'null' ? cards[place].sentences.split('。')[0] : null}
            <br></br>
            {cards[place].sentences !== 'null' ? cards[place].sentences.split('。')[1] : null}
            <br></br>
            {cards[place].sentences !== 'null' ? cards[place].sentences.split('。')[2] : null}
          </div>
        ) : (
            <div>
              {cards[place].id}
              <br></br>
              {cards[place].kan}
              <br></br>
              {cards[place].tran !== 'null' ? cards[place].tran : null}
              <br></br>
              <p>Sentences:</p>
              {cards[place].sentences !== 'null' ? cards[place].sentences.split('。')[0] : null}
              <br></br>
              {cards[place].sentences !== 'null' ? cards[place].sentences.split('。')[1] : null}
            </div>
          )
        }
        <button onClick={() => this.flipCard()}>Flip</button>
      </div >
    )
  }
}

export default Card