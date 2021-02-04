import React from 'react';
import diceEmpty from '../imgs/dice-empty.png';
import dice1 from "../imgs/dice1.png"
import dice2 from "../imgs/dice2.png"
import dice3 from "../imgs/dice3.png"
import dice4 from "../imgs/dice4.png"
import dice5 from "../imgs/dice5.png"
import dice6 from "../imgs/dice6.png"


class Dice extends React.Component {
  state = {
    diceImgs: [diceEmpty, dice1, dice2, dice3, dice4, dice5, dice6],
    randomPick: 3
  };

  roolDice = () => {
    this.setState({ randomPick: 0 });
    setTimeout(() => {
        this.setState({ randomPick: Math.floor(Math.random() * 5) + 1 });
    }, 1000);
  }

  render() {
    return <img src={this.state.diceImgs[this.state.randomPick]} alt="dice 1" onClick={this.roolDice}></img>;
  }
}

export default Dice;
