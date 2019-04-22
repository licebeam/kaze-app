import React, { Component } from 'react';

class Card extends Component {
  render() {
    const { cards, place } = this.props;
    return (
      <div> Check out this card
        <div>
          {cards[place].kan}
        </div>
      </div>
    )
  }
}

export default Card