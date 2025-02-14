import { AnswerType, Option, QuestionType } from '@/app/lib/configurator/types'
import Image from 'next/image';
import { FieldErrors, UseFormRegisterReturn } from 'react-hook-form';
import { OptionBox, OptionLabel, OptionsWrapper } from './styles';

type OptionsProps = {
  options: Option[];
  id: number | string;
  register: UseFormRegisterReturn;
  errors: FieldErrors;
  type: QuestionType;
  answerType?: AnswerType;
}

export const Options = ({ options, register, errors, id }: OptionsProps) => {
  const fieldError = errors[`question-${id}`];

  return (
    <>
      <OptionsWrapper>
        {options.map((option) => (
          <OptionBox key={option.value}>
            <input type="radio" id={option.value} value={option.value} disabled={option.disabled} {...register} />
            <OptionLabel htmlFor={option.value}>
              {
                option.icon && (
                  <Image src={`/icons/${option.icon}.svg`} alt={option.label} width={60} height={60} />
                )
              }
              {option.label}
            </OptionLabel>
          </OptionBox>
        ))}

        
      </OptionsWrapper>
      {fieldError && (
        <p className="text-red-500 text-sm mt-1">
          {fieldError.message?.toString()}
        </p>
      )}
    </>
  )
};
