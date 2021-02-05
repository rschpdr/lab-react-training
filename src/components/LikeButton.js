import React from 'react'


class LikeButton extends React.Component {

    state = {
        count: 0,
    }

    onIncrement = () => {
        this.setState((previousState) => {
          return { count: previousState.count++ };
        });
      };

    render() {
        return <div>
           <button onClick={this.onIncrement} className="btn btn-primary m-2">{this.state.count} {' '} Like</button>
        </div>
    }

}

export default LikeButton;