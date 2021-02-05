import React from 'react';
import './NumbersTable.css';

class NumbersTable extends React.Component {
  state = {
    limit: this.props.limit,
  };

  render() {
    const arr = [];

    for (let i = 1; i <= this.state.limit; i++) {
      arr.push(
        <li style={{ backgroundColor: i % 2 === 0 ? 'red' : 'white' }}>{i}</li>
      );
    }

    return (
      <div className="NumbersTable">
        <ul>{arr}</ul>
      </div>
    );
  }
}

export default NumbersTable;
