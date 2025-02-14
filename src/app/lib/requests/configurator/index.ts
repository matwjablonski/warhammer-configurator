import { AnswerType } from '../../configurator/types';
import { getRace } from './getRace';

export const getAnswer = async (answerType: AnswerType,diceRoll: number): Promise<{}> => {
  switch (answerType) {
    case 'race':
      return await getRace(diceRoll);
    default:
      return {};
  }
}
