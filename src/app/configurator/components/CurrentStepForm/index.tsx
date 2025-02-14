import { useForm } from "react-hook-form";
import { Question } from '../Question';
import { AnswerType, Question as QuestionShape, QuestionType } from '@/app/lib/configurator/types';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Navigation } from '../Navigation';
import { useConfiguratorStore } from '../../store/useConfiguratorStore';

type CurrentStepFormProps = {
  questions: QuestionShape[];
  totalSteps: number;
}

export const CurrentStepForm = ({ questions, totalSteps }: CurrentStepFormProps) => {
  const { step, setStep, updateRoll } = useConfiguratorStore();

  const validationForStep = questions.reduce((prev, curr) => {
    if (curr.validation.length === 0) {
      return prev;
    }

    let validationRule;

    curr.validation.forEach((validation: string) => {
      if (validation === "radio_required") {
        validationRule = z
          .string({
            required_error: "Wybierz jedną z opcji",
          })
          .nullable()
          .transform((val) => val || "")
          .refine((val) => val.length > 0, {
            message: "Wybierz jedną z opcji"
          });
      }

      if (validation === "dice_k100") {
        validationRule = z.coerce
          .number({
            required_error: "Rzuć kością i wpisz wynik",
          })
          .min(0, 'Wartość nie może być mniejsza niż 0')
          .max(100, 'Wartość nie może być większa niż 100')
          .refine(value => {
            console.log('dice_k100 value', value);
            return value !== 0;
          },  {
            message: "Rzuć kością i wpisz wynik",
          });
      }
    });
    
    return {
      ...prev,
      [`question-${curr.id}`]: validationRule,
    };
  }, {});

  const shouldShowNextBtn = totalSteps - 1 > step;
    const shouldShowPrevBtn = step > 0;
    const shouldShowFinishBtn = totalSteps - 1 === step;

  const schema = Object.keys(validationForStep).length
  ? z.object({...validationForStep})
  : z.object({}).passthrough();

  const { register, handleSubmit, formState: { errors, isValid } } = useForm({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  const onSubmit = (data: unknown) => {
    if (!isValid) {
      return false;
    }
    console.table(data);
  };

  const nextStep = () => {
    handleSubmit(onSubmit)();

    if (!isValid) {
      return false;
    }
    setStep(step + 1);
  }

  const customOnChange = (
    questionType: QuestionType,
    answerType: AnswerType,
    value: string | number) => {
    if (questionType === 'DICE') {
      updateRoll(value as number, answerType);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {questions && questions.map((question) => (
          <Question
            key={question.id}
            {...question}
            register={register(
              `question-${question.id}`,
              {
                onChange: (e) => {
                  const value = parseInt(e.target.value);
                  if (question.answerType) {
                    customOnChange(question.type, question.answerType, value);
                  }
                }
              },
            )}
            errors={errors}
          />
        ))}
      </form>
      <Navigation
        shouldShowFinishBtn={shouldShowFinishBtn}
        shouldShowNextBtn={shouldShowNextBtn}
        shouldShowPrevBtn={shouldShowPrevBtn}
        nextStep={nextStep}
        prevStep={() => setStep(step - 1)}
      />
    </>
  );
}
