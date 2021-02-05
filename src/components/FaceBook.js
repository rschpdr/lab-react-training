import React from 'react';
import profiles from '../data/berlin.json';
import './FaceBook.css';

class FaceBook extends React.Component {
  state = {
    data: profiles,
  };

  render() {
    //Buttons
    let countries = [];
    let countriesHtml = []

    this.state.data.forEach(function (element) {
      if (countries.includes(element.country) === false) {
        countries.push(element.country)
        countriesHtml.push(<button>{element.country}</button>);
      }
    });

    //Students Cards
    let content = [];

    this.state.data.forEach((element) =>
      content.push(
        <div className="student">
          <img src={element.img} alt="student pic"></img>
          <ul>
            <li>
              <strong>First name: </strong>
              {element.firstName}
            </li>
            <li>
              <strong>Last name: </strong>
              {element.lastName}
            </li>
            <li>
              <strong>Country: </strong>
              {element.country}
            </li>
            <li>
              <strong>Type: </strong>
              {element.isStudent === false ? ' Teacher' : ' Student'}
            </li>
          </ul>
        </div>
      )
    );

    return (
      <div>
        <button>All</button>
        {countriesHtml}
        {content}
      </div>
    );
  }
}

export default FaceBook;
