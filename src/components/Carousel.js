import React from 'react'

class Carousel extends React.Component {

    state = {
        profilePicture: this.props.imgs,
        selected: 0
    }

    previousImg = () => {
        this.setState({
            selected: this.state.selected === 0 ?
                (this.state.profilePicture.length - 1) :
                this.state.selected - 1
        })
    }

    nextImg = () => {
        this.setState({
            selected: this.state.selected === (this.state.profilePicture.length - 1) ?
                0 : this.state.selected + 1
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.previousImg}>Previous</button>
                <img src={this.state.profilePicture[this.state.selected]}
                    alt="picutre of people" />
                <button onClick={this.nextImg}>Next</button>
            </div>
        )
    }

}

export default Carousel