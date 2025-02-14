import { step0Questions } from './questions/step0';
import { step1DiceQuestions } from './questions/step1/dice';
import { step2DiceQuestions } from './questions/step2/dice';
import { Step } from './types';

const steps: Step[] = [
  {
    title: 'Zaczynamy',
    description: `
      Witaj w kreatorze postaci do Warhammera!
      Zanim zaczniemy, musisz odpowiedzieć na kilka pytań. Konfigurator pomoże Ci stworzyć postać, która będzie pasować do Twojego stylu gry. Obliczyć statystyki. Jedyne czego potrzebujesz to kości do gry, kartkę i odrobinę wyobraźni.
    `,
    orderNo: 0,
    questions: step0Questions,
  },
  {
    title: 'Wybór rasy',
    description: 'W grze Warhammer Fantasy masz do wyboru 5 ras. Każda z nich ma swoje unikalne cechy i umiejętności. Wybierz jedną z nich.',
    orderNo: 1,
    questions: [ ...step1DiceQuestions ],
  },
  {
    title: 'Wybór klasy i profesji',
    orderNo: 2,
    questions: [ ...step2DiceQuestions ],
  },
  {
    title: 'Przydział cech początkowych',
    orderNo: 3,
  },
  {
    title: 'Wybór umiejętności i zdolności',
    orderNo: 4,
  },
  {
    title: 'Określenie pochodzenia i wieku',
    orderNo: 5,
  },
  {
    title: 'Przydział Punktów Doświadczenia',
    orderNo: 6,
  },
  {
    title: 'Wyposażenie i finanse',
    orderNo: 7,
  },
  {
    title: 'Determinacja losów postaci',
    orderNo: 8,
  },
  {
    title: 'Relacje i kontakty',
    orderNo: 9,
  },
  {
    title: 'Ostatnie kroki',
    orderNo: 10,
  },
]

export default steps;
