import React from 'react';

class ClickablePicture extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img: props.img,
      imgClicked: props.imgClicked,
      isClicked: false,
      imgShown: props.img,
    };
  }

  eventHandler = () => {
    this.setState({
      imgShown: !this.state.isClicked ? this.state.img : this.state.imgClicked,
      isClicked: !this.state.isClicked,
    });
  };


  render() {
    return (
      <div>
        <img
          src={this.state.imgShown}
          alt="Smiling man"
          onClick={this.eventHandler}
        />
      </div>
    );
  }
}

export default ClickablePicture;
