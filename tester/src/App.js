import React from 'react';
import { connect } from 'react-redux';
import { ball, strike, foul, hits } from './stores/actions';

class App extends React.Component {
  render() {
    return (
      <div>
        <div>
          Ball {this.props.ball}
          {" "}
          Strike {this.props.strike}
          {" "}
          {this.props.foul} Foul Balls
          {" "}
          {this.props.hits} Hits
        </div>
        <div>
          <button>Pitcher Flubbed It</button>
          {" "}
          <button>Batter's Blind</button>
          {" "}
          <button>Can He Even Hit The Ball?!</button>
          {" "}
          <button>FINALLY!!!!</button>
        </div>
      </div>
    );
  };
};

const mapPropsToState = (state) => {
  return {
    ball: state.ball,
    strike: state.strike,
    foul: state.foul,
    hits: state.hits
  };
};

export default connect(mapPropsToState, { ball, strike, foul, hits })(App);