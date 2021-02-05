import React from 'react';
import './NumbersTable.css';

class NumbersTable extends React.Component {
  state = {
    limit: this.props.limit,
  };

  render() {
    let items = [];

    for (let i = 1; i <= this.state.limit; i++) {
      items.push(
        <li style={{ backgroundColor: i % 2 === 0 ? 'red' : 'white' }}>{i}</li>
      );
    }

    return <ul className="tableNumbers">{items}</ul>;
  }
}

export default NumbersTable;
