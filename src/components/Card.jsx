import React, { Component } from 'react';

class Card extends Component {
  state = { flipped: false }

  flipCard = () => {
    this.setState({ flipped: !this.state.flipped })
  }

  componentDidUpdate(prevProps) {
    if (prevProps.place !== this.props.place) {
      this.setState({ flipped: false })
    }
  }

  render() {
    const { cards, place } = this.props;
    const { flipped } = this.state;

    return (
      <div>
        {flipped ? (
          <div>
            {cards[place].english}
          </div>
        ) : (
            <div>
              {cards[place].id}
              <br></br>
              {cards[place].kan}
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