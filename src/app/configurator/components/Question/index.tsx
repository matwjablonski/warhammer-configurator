import { Question as QuestionType } from '@/app/lib/configurator/steps'

type QuestionProps = {} & QuestionType;

export const Question = ({
  id,
  type,
  question,
  options,
}: QuestionProps) => {
  return (
    <div>
      <h2>{question}</h2>
      {options && options.map((option) => (
        <div key={option.value}>
          <input type="radio" id={option.value} name={`question-options-${id}`} value={option.value} />
          <label htmlFor={option.value}>{option.label}</label>
        </div>
      ))}
    </div>
  )
}
