import React from 'react'

class ClickablePicture extends React.Component {  

    constructor(props) {
        super(props);
        this.img = props.img;
        this.imgClicked = props.imgClicked;
  }  

    state = {
        notClicked: true
    }

    change = () => {
        
        let newState = this.state.notClicked ? false : true
        
        this.setState({notClicked: newState})

    }

    render () { 
        let alt = "the image of a person, which when clicked switches to the image of the person with sunglasses"
        return (
            <div>
                <img src={this.state.notClicked ? this.img : this.imgClicked} alt={alt} onClick={this.change} />
            </div> 
        )
    }
        
}

export default ClickablePicture