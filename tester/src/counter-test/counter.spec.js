const { ball, strike, foul, hit } = require('./counter.js');

describe('counter.js', () => {
  describe('ball()', () => {
    it('Increases count of base on balls instances.', () => {
      const batter = {
        balls: 1,
        strikes:  2,
        fouls: 1,
        hits: 3
      };
      const expected = {
        balls: 2,
        strikes: 2,
        fouls: 1,
        hits: 3
      };
      const oneBall = ball(batter);
      expect(oneBall).toEqual(expected);
    });
    it('Resets all balls, strikes, & fouls counters when balls === 4', () => {
      const batter = {
        balls: 4,
        strikes: 2,
        fouls: 1,
        hits: 3
      };
      const expected = {
        balls: 0,
        strikes: 0,
        fouls: 0,
        hits: 3
      };
      const baseOnBalls = ball(batter);
      expect(baseOnBalls).toEqual(expected)
    });
  });
  describe('strike()', () => {
    it('Increases strike counter on strike instances.', () => {
      const batter = {
        balls: 1,
        strikes: 1,
        fouls: 0,
        hits: 4
      };
      const expected = {
        balls: 1,
        strikes: 2,
        fouls: 0,
        hits: 4
      };
      const oneStrike = strike(batter);
      expect(oneStrike).toEqual(expected);
    });
    it('Resets balls, strikes, and fouls counters when strikes === 3', () => {
      const batter = {
        balls: 1,
        strikes: 3,
        fouls: 1,
        hits: 4
      };
      const expected = {
        balls: 0,
        strikes: 0,
        fouls: 0,
        hits: 4
      };
      const strikeOut = strike(batter);
      expect(strikeOut).toEqual(expected);
    });
  });
  describe('foul()', () => {
    it('Increases the fouls counter on a foul ball instance.', () => {
      const batter = {
        balls: 2,
        strikes: 2,
        fouls: 6,
        hits: 8
      };
      const expected = {
        balls: 2,
        strikes: 2,
        fouls: 7,
        hits: 8
      };
      const foulBall = foul(batter);
      expect(foulBall).toEqual(expected);
    });
  });
  describe('hit()', () => {
    it('Resets balls, strikes, and fouls counters when hits + 1.', () => {
      const batter = {
        balls: 2,
        strikes: 2,
        fouls: 7,
        hits: 8
      };
      const expected = {
        balls: 0,
        strikes: 0,
        fouls: 0,
        hits: 9
      };
      const goodSwing = hit(batter);
      expect(goodSwing).toEqual(expected);
    });
  });
});