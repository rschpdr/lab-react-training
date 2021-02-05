import React from 'react';

class Carousel extends React.Component {
  state = {
    image: this.props.imgs,
    selected: 0,
  };

  leftClick = () => {
    this.setState({
      selected:
        this.state.selected === 0
          ? this.props.imgs.length - 1
          : this.state.selected - 1,
    });
  };

  rightclick = () => {
    this.setState({
      selected:
        this.state.selected === this.props.imgs.length - 1
          ? 0
          : this.state.selected + 1,
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.leftClick}>Left</button>
        <img src={this.props.imgs[this.state.selected]} />
        <button onClick={this.rightclick}>Right</button>
      </div>
    );
  }
}

export default Carousel;
