import React from 'react';

class ClickablePicture extends React.Component {
    state = {
        img: this.props.img,
        imgClicked: this.props.imgClicked
    }

    changePictureFunction = () => {
        this.setState({img: this.state.img === this.props.img ? this.props.imgClicked : this.props.img})
    }

    render () {
        return(
            <img src={this.state.img} onClick={this.changePictureFunction} alt="nice-guy"></img>
        )
    }
}

export default ClickablePicture