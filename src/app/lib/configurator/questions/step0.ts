import { Question } from '../types';

export const step0Questions: Question[] = [
  {
    question: 'Wybierz proces tworzenia postaci',
    note: 'Możesz wybrać jeden z dostępnych procesów tworzenia postaci. Wybierając "Będę rzucał kośćmi" będziesz musiał samodzielnie wylosować wartości dla cech postaci - system podpowie co udało Ci się wylosować. Wybierając "Chcę wpisać ręcznie" zaopatrz się w podręcznik do gry. Wybierając "Chcę, żeby system wylosował za mnie" system stworzy losową postać dla Ciebie.',
    id: 1,
    type: 'SYSTEM',
    options: [
      {
        value: 'dice', label: 'Będę rzucał kośćmi', icon: 'dice'
      },
      {
        value: 'manual', label: 'Chcę wpisać ręcznie', icon: 'manual', disabled: true
      },
      {
        value: 'auto', label: 'Chcę, żeby system wylosował za mnie', icon: 'auto', disabled: true
      }
    ],
    validation: [ 'radio_required' ]
  }
];
