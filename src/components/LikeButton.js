import React from 'react';

class LikeButton extends React.Component {
  state = {
    count: 0,
    color: ['purple', 'blue', 'green', 'yellow', 'orange', 'red'],
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  randomNumber = () => {
    return Math.floor(Math.random() * this.state.color.length);
  };

  render() {
    return (
      <div>
        <button
          onClick={this.handleIncrement}
          style={{ backgroundColor: this.state.color[this.randomNumber()] }}
          className="btn-lg m-4"
        >
          {this.state.count}Likes
        </button>
      </div>
    );
  }
}

export default LikeButton;
