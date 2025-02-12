export enum QuestionType {
  SYSTEM = 'system',
  RACE = 'race',
}

export type Option = {
  value: string;
  label: string;
}

export type Question = {
  question: string;
  id: number;
  type: QuestionType;
  description?: string;
  options?: Option[];
}

export type Step = {
  title: string;
  description?: string;
  orderNo: number;
  questions?: Question[];
}

const steps: Step[] = [
  {
    title: 'Zaczynamy',
    description: `
      Witaj w kreatorze postaci do Warhammera!
      Zanim zaczniemy, musisz odpowiedzieć na kilka pytań. Konfigurator pomoże Ci stworzyć postać, która będzie pasować do Twojego stylu gry. Obliczyć statystyki. Jedyne czego potrzebujesz to kości do gry, kartkę i odrobinę wyobraźni.
    `,
    orderNo: 0,
    questions: [
      {
        question: 'Wybierz proces tworzenia postaci',
        id: 1,
        type: QuestionType.SYSTEM,
        options: [
          {
            value: 'dice', label: 'Będę rzucał kośćmi'
          },
          {
            value: 'manual', label: 'Chcę wpisać ręcznie'
          },
          {
            value: 'auto', label: 'Chcę, żeby system wylosował za mnie'
          }
        ]
      }
    ],
  },
  {
    title: 'Wybór rasy',
    description: 'W grze Warhammer Fantasy masz do wyboru 5 ras. Każda z nich ma swoje unikalne cechy i umiejętności. Wybierz jedną z nich.',
    orderNo: 1,
    questions: [
      {
        question: 'Wybierz rasę',
        id: 2,
        type: QuestionType.RACE,
      }
    ],
  },
  {
    title: 'Wybór klasy i profesji',
    orderNo: 2,
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
