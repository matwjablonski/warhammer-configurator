import { Hero } from '../configurator/types';

export const getInitialXP = (hero: Hero) => {
  let xp = 0;

  if (!hero) {
    return xp;
  }

  if (hero.rolls.race && hero.rolls.race?.rollTimes === 1) {
    xp += 20;
  }

  return xp;
}
