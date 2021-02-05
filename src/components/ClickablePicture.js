import React from 'react'

class ClickablePicture extends React.Component {
    state = {
        imgsrc: this.props.img,
        imgClickedsrc: this.props.imgClicked
    };

    eventHandler = () => {
        this.setState({
            imgsrc: this.state.imgsrc === this.props.img ?  this.props.imgClicked : this.props.img
        })
    };
  
    render() {
      // Todo componente de classe tem o método render
      // o render é chamado novamente a cada momento em que o this.setState() é chamado
      return (
        <div>   
        <img src={this.state.imgsrc} alt="imagem do mano" onClick={this.eventHandler}/>
        </div>
      );
    }
  }
  
  export default ClickablePicture;