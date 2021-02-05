import React from 'react'

class LikeButton extends React.Component {
    state = {
      count: 0,
      colors : ['purple','blue','green','yellow','orange','red'],
    };

    handleIncrement = () => {
      this.setState({ count: this.state.count + 1 });

    };
  
    render() {
      // Todo componente de classe tem o método render
      // o render é chamado novamente a cada momento em que o this.setState() é chamado
      return (
        <div className='d-flex' style={{margin: "1rem",} }>
          <button style={{backgroundColor:this.state.colors[Math.floor(Math.random() * this.state.colors.length)]}} onClick={this.handleIncrement}>{this.state.count} Likes </button>
        </div>
      );
    }
  }
  
  export default LikeButton;