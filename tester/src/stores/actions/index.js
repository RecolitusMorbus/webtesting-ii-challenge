export const BALL = 'BALL';
export const STRIKE = 'STRIKE';
export const FOUL = 'FOUL';
export const HIT = 'HIT';

export const ball = () => {
  return ({ type: BALL });
};

export const strike = () => {
  return ({ type: STRIKE });
};

export const foul = () => {
  return ({ type: FOUL });
};

export const hits = () => {
  return ({ type: HIT });
};