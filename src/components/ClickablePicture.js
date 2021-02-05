import React from 'react'
import './ClickablePicture.css'

class ClickablePicture extends React.Component{

    state = {
        withGlasses: false
    }

    changePicture = (event) => {
    
       if(this.state.withGlasses) {
        event.target.src = this.props.img
        this.setState({withGlasses: false})
       } else {
        event.target.src = this.props.imgClicked
        this.setState({withGlasses: true})
       }
    }

render() {
    return <div>
        <img src={this.props.img} className="img-size m-4" id='clickable-img' onClick={this.changePicture} alt='Pic of person with glasses on and off' />
    </div>
}


}

export default ClickablePicture;