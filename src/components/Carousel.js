import React from 'react';

class Carousel extends React.Component {
    state = {
        pics: this.props.imgs,
        selected: 0
    }

    previusPic = () => {
        this.setState({ selected: this.state.selected === 0 ? (this.state.pics.length - 1) : this.state.selected - 1});

    }
    
    nextPic = () => {
        this.setState({ selected: this.state.selected === (this.state.pics.length - 1)? 0 : this.state.selected + 1});
    } 

    render() {
        return(
            <div>
                <button onClick={this.previusPic}>Left</button>
                <img src={this.state.pics[this.state.selected]} alt="beaultiful img"></img>
                <button onClick={this.nextPic}>Right</button>
            </div>
        )
    }
}

export default Carousel