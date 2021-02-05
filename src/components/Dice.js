import React from 'react';

class Dice extends React.Component {
  state = {
    randomDice: require('../dice-images/dice-empty.png'),
  };

  randomNumber = () => {
    return Math.floor(Math.random() * 6 + 1);
  };

  eventHandler = () => {
    this.setState({
      randomDice: require(`../dice-images/dice${this.randomNumber()}.png`),
    });
  };

  render() {
    return (
      <div>
        <img
          src={this.state.randomDice}
          alt="Image of dice"
          onClick={this.eventHandler}
        />
      </div>
    );
  }
}

export default Dice;
