import { Question } from '../../types';

export const step1DiceQuestions: Question[] = [
  {
    question: 'Wybierz rasę',
    note: 'Twój bohater może być człowiekiem, krasnoludem, niziołkiem lub elfem. Każda z ras ma swoje unikalne cechy i umiejętności.',
    id: 2,
    type: 'DICE',
    answerType: 'race',
    validation: ['dice_k100'],
    for: 'dice',
    required: true
  }
];
