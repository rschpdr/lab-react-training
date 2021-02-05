import React from 'react';
import './Dice.css'

class Dice extends React.Component {

    state = {
        
    }

    randomNumber = (min=1, max=7) => {
        let ranNum = Math.floor(Math.random() * (max - min) + min)
        return ranNum
    }

    randomDice = (event) => {
        let ranNum = this.randomNumber();
        event.target.src = `img/dice-empty.png`
        event.target.src = `img/dice${ranNum}.png`

    }

    render() {
        return <div>
                <img src='img/dice6.png' id='random-dice' className="img-size m-4"  onClick={this.randomDice} alt='Dice with random number' />
        </div>
    }
}

export default Dice;