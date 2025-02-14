import { QuestionType, Question as QuestionShape } from '@/app/lib/configurator/types';
import { Options } from '../Options';
import { Select } from '../Select';
import { FieldErrors, UseFormRegisterReturn } from 'react-hook-form';
import { RollDice } from '../RollDice';
import { QuestionBox, QuestionNote, QuestionTitle } from './styles';

type QuestionProps = {
  register: UseFormRegisterReturn;
  errors: FieldErrors;
} & QuestionShape;

export const QuestionTypeComponent: Record<QuestionType, typeof Options | typeof Select | typeof RollDice> = {
  SYSTEM: Options,
  RACE: Select,
  DICE: RollDice,
}

export const Question = ({
  id,
  type,
  question,
  note,
  options,
  register,
  errors,
  answerType,
  ...rest
}: QuestionProps) => {
  const Comp = QuestionTypeComponent[type as QuestionType];

  return (
    <QuestionBox>
      <QuestionTitle>{question}</QuestionTitle>
      {note && <QuestionNote>{note}</QuestionNote>}
      <Comp {...rest} type={type} id={id} options={options ?? []} register={register} errors={errors} answerType={answerType} />
    </QuestionBox>
  )
}
