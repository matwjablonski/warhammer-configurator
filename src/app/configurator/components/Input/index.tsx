import { InputHTMLAttributes } from 'react'

type InputProps = {
  className?: string;
  disabledMessage?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ className, disabledMessage, ...rest }: InputProps) => (
  <input 
    {...rest}
    className={`
      border-2 
      border-primary
      p-3 
      rounded-sm 
      font-medieval
      [&:disabled]:opacity-30
      [&:disabled]:cursor-not-allowed
      ${className}
    `}
    title={rest.disabled && disabledMessage ? disabledMessage : ''}
  />
)
