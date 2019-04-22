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
      <div> Check out this card
        {flipped ? (
          <div>
            {cards[place].english}
          </div>
        ) : (
            <div>
              {cards[place].kan}
              <br />
              {cards[place].tran !== 'null' ? cards[place].tran : null}
            </div>
          )
        }
        <button onClick={() => this.flipCard()}>Flip</button>
      </div >
    )
  }
}

export default Card