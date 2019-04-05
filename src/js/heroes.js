import { isObject, isNumber } from '../utils/checkers';
import UserException from '../utils/exceptions';
import healthComparer from '../utils/comparers';

const sortHeroes = (heroes) => {
  // validation
  if (heroes === null || heroes === undefined) {
    throw new UserException('Input is null or undefined');
  }
  if (!Array.isArray(heroes)) throw new UserException('Input is not an array');
  if (heroes.every(hero => isObject(hero))) { throw new UserException('Input does not contain objects'); }
  if (heroes.every(hero => 'health' in hero)) throw new UserException('Heroes have no health');
  if (heroes.every(hero => isNumber(hero.health))) { throw new UserException('Health is not a number'); }

  // logic
  return heroes
    .slice()
    .sort(healthComparer)
    .reverse();
};

export default sortHeroes;
