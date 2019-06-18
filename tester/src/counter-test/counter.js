module.exports = {
  ball,
  strike,
  foul,
  hit
};

function ball(batter) {
  if (batter.balls < 4) {
    const oneBall = {
      balls: batter.balls + 1,
      strikes: batter.strikes,
      fouls: batter.fouls,
      hits: batter.hits
    };
    return oneBall;
  } else if (batter.balls === 4) {
    const baseOnBalls = {
      balls: 0,
      strikes: 0,
      fouls: 0,
      hits: batter.hits
    };
    return baseOnBalls;
  } else {
    return batter;
  };
};

function strike(batter) {
  if (batter.strikes < 3) {
    const oneStrike = {
      balls: batter.balls,
      strikes: batter.strikes + 1,
      fouls: batter.fouls,
      hits: batter.hits
    };
    return oneStrike;
  } else if (batter.strikes === 3) {
    const strikeOut = {
      balls: 0,
      strikes: 0,
      fouls: 0,
      hits: batter.hits
    };
    return strikeOut;
  } else {
    return batter;
  };
};

function foul(batter) {
  const foulBall = {
    balls: batter.balls,
    strikes: batter.strikes,
    fouls: batter.fouls + 1,
    hits: batter.hits
  };
  return foulBall;
};

function hit(batter) {
  const goodSwing = {
    balls: 0,
    strikes: 0,
    fouls: 0,
    hits: batter.hits + 1
  };
  return goodSwing;
};