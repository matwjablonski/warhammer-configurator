export type Question = {
  question: string;
  description: string;
  answers: [];
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
  },
  {
    title: 'Wybór rasy',
    orderNo: 1,
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
