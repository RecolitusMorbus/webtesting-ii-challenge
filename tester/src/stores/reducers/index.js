import { BALL, STRIKE, FOUL, HIT } from '../actions/';

const batterInit = {
  balls: 0,
  strikes: 0,
  fouls: 0,
  hits: 0
};

export default (state = batterInit, action) => {
  switch (action.type) {
    case BALL:
      return state.balls + 1;
    case STRIKE:
      return state.strikes + 1;
    case FOUL:
      return state.fouls + 1;
    case HIT:
        return state = {
          balls: 0,
          strikes: 0,
          fouls: 0,
          hits: state.hits + 1
        };
    default:
      return state;
  };
};