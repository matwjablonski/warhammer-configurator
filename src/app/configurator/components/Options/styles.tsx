import { LabelHTMLAttributes, PropsWithChildren } from 'react';

export const OptionsWrapper = ({ children }: PropsWithChildren) => (
  <div className="flex gap-8">{children}</div>
)

export const OptionBox = ({ children }: PropsWithChildren) => (
  <div className={`
    flex-1
    [&>input]:hidden
    [&>input:disabled+label]:opacity-30
    [&>input:disabled+label]:cursor-not-allowed
    [&>input:checked+label]:bg-primary
    [&>input:checked+label]:text-white
    [&>input:checked+label]:border-primary
  `}>{children}</div>
)

export const OptionLabel = ({ children, ...rest }: PropsWithChildren<LabelHTMLAttributes<HTMLLabelElement>>) => (
  <label className={`
    p-4
    rounded-lg
    shadow-xl
    border-2
    border-dark-grey
    text-dark-grey
    cursor-pointer
    flex
    flex-col
    items-center
    justify-center
    font-medieval
    h-[200px]
    gap-6
    text-center
  `}
  {...rest}
  >{children}</label>
)
