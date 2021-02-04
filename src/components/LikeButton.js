import React from 'react';

class LikeButton extends React.Component {
  state = {
    backgroundColor: ['purple', 'blue', 'green', 'yellow', 'orange', 'red'],
    likes: 0,
    colorPick: 0,
  };

  handleIncrementClick = () => {
    this.setState({ likes: this.state.likes + 1 });
    this.setState({ colorPick: Math.floor(Math.random() * 5) });
  };

  render() {
    return (
      <button
        style={{
          backgroundColor: this.state.backgroundColor[this.state.colorPick],
        }}
        onClick={this.handleIncrementClick}
      >
        {this.state.likes}
        {` Likes`}
      </button>
    );
  }
}

export default LikeButton;
