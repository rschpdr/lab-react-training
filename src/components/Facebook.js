import React from 'react';
import profiles from '../data/berlin.json';

class Facebook extends React.Component {
  state = {
    file: profiles,
  };

  render() {
    let arr = [];
    this.state.file.forEach((element) =>
      arr.push(
        <div className="border border-dark m-2 d-flex p-1">
          <img
            src={element.img}
            alt="Profile pic"
            className="img-fluid img-responsive img-thumbnail"
          />
          <ul className="list-inline">
            <li>
              <strong>First Name: </strong>
              {element.firstName}
            </li>
            <li>
              <strong>Last Name: </strong>
              {element.lastName}
            </li>
            <li>
              <strong>Country: </strong>
              {element.country}
            </li>
            <li>
              <strong>Type: </strong>
              {element.isStudent === false ? 'Teacher' : 'Student'}
            </li>
          </ul>
        </div>
      )
    );

    return <div>{arr}</div>;
  }
}

export default Facebook;
