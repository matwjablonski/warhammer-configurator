import { AnswerType, HeroProperty } from '../../configurator/types';
import { getRace } from './getRace';

export type AnswerResponseType = { [key in AnswerType]?: HeroProperty }

export const getAnswer = async (answerType: AnswerType,diceRoll: number): Promise<AnswerResponseType> => {
  switch (answerType) {
    case 'race':
      return await getRace(diceRoll);
    default:
      return {};
  }
}
