import { Question } from '../../types';

export const step2DiceQuestions: Question[] = [
  {
    question: 'Wybierz klasę',
    id: 3,
    type: 'DICE',
    answerType: 'class',
    validation: ['dice_k100'],
    for: 'dice',
    required: true
  }
];
