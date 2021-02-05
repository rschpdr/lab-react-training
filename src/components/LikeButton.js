import React from 'react'

class LikeButton extends React.Component {

    state = {
        likes: 0,
        btnColor: "purple"
    }

    addLike = () => {
        let count = this.state.likes + 1;
        let colors = ['purple','blue','green','yellow','orange','red']
        let newColor = this.state.btnColor === colors[colors.length-1] ? colors[0] : colors[colors.indexOf(this.state.btnColor)+1]
        
        this.setState({likes: count, btnColor: newColor})
    }
    
    render(){

        return <button style={{backgroundColor: this.state.btnColor}} onClick={this.addLike}>{this.state.likes} Likes</button>
    } 
}

export default LikeButton