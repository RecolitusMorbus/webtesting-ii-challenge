import React from 'react';
import { connect } from 'react-redux';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <p>
          Ball {this.props.ball}
          {" "}
          Strike {this.props.strike}
          {" "}
          {this.props.foul} Foul Balls
          {" "}
          {this.props.hits} Hits
        </p>
        <p>
          <button>Pitcher Flubbed It</button>
          {" "}
          <button>Batter's Blind</button>
          {" "}
          <button>Can He Even Hit The Ball?!</button>
          {" "}
          <button>FINALLY!!!!</button>
        </p>
      </div>
    );
  };
};