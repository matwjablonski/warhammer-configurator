export type QuestionType = 'SYSTEM' | 'RACE' | 'DICE';

export type AnswerType = 'race' | 'class';

export type AvailableIcons = 'dice' | 'manual' | 'auto';

export type Option = {
  value: string;
  icon?: AvailableIcons;
  label: string;
  disabled?: boolean;
}

export type Validation = 
 | 'radio_required'
 | 'dice_k100';

export type Question = {
  question: string;
  note?: string;
  id: number;
  type: QuestionType;
  answerType?: AnswerType;
  description?: string;
  required?: boolean;
  options?: Option[];
  validation: Validation[];
  for?: 'dice' | 'manual' | 'auto';
}

export type Step = {
  title: string;
  description?: string;
  orderNo: number;
  questions?: Question[];
}

export type HeroProperty = {
  name: string;
  id: string;
}

export type Roll = {
  rollTimes: number;
  result: number | null;
};

export type Hero = {
  rolls: {
    [key: string]: Roll;
  }
  race?: HeroProperty;
  class?: HeroProperty;
} 
