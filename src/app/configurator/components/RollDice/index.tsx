import { Button } from '@/app/components/Button';
import { FieldErrors, UseFormRegisterReturn } from 'react-hook-form';
import { Input } from '../Input';
import { AnswerType, HeroProperty } from '@/app/lib/configurator/types';
import { getAnswer } from '@/app/lib/requests/configurator';
import { useConfiguratorStore } from '../../store/useConfiguratorStore';
import { Result } from '../Result';

type RollDiceProps = {
  id: number | string;
  register: UseFormRegisterReturn;
  required?: boolean;
  errors: FieldErrors;
  answerType?: AnswerType;
}

export const RollDice = ({ id, register, required, errors, answerType }: RollDiceProps) => {
  const fieldError = errors[`question-${id}`];
  const { newHero, updateHero } = useConfiguratorStore();

  const showResults = async () => {
    if (answerType && newHero.rolls[answerType] && newHero.rolls[answerType].result) {
      const value: { [key in AnswerType]?: HeroProperty } = await getAnswer(answerType, newHero.rolls[answerType].result);
      if (value && value[answerType]) {
        updateHero({ ...value[answerType] }, answerType);
      }
    }
  }

  return answerType ? (
    <>
      <div className="flex gap-8">
        <Input
          type="text"
          id={`${id}`}
          {...register}
          disabled={newHero[answerType] ? true : false}
          disabledMessage="Wybór został już dokonany"
          required={required}
          className="max-w-[80px] text-center"
        />
        <Button onClick={showResults} label="Odkryj swój los" type="button" disabled={!newHero.rolls[answerType] || !!newHero[answerType]} />
      </div>
      {fieldError && (
        <p className="text-red-500 text-sm mt-1">
          {fieldError.message?.toString()}
        </p>
      )}
      {newHero[answerType] && (
        <Result
          result={newHero[answerType]?.name}
          rollType={answerType}
          rollNumber={newHero.rolls[answerType].rollTimes}
        />
      )}
    </>
  ) : null;
};
