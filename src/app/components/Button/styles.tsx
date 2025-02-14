import Link, { LinkProps } from 'next/link';
import { ButtonHTMLAttributes, PropsWithChildren } from 'react';

const buttonBase = `
  bg-primary
  px-6
  py-3

  [&:hover]:bg-main-dark
  transition-all

  [&:disabled]:opacity-50
`;

const outlinedButton = `
  border-2
  border-primary
  text-primary
  bg-transparent
`;

const smallButton = `
  px-4
  py-2
  text-sm
`;

type ButtonBtnProps = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement> & { outlined?: boolean, small?: boolean }>;

export const ButtonBtn = ({ children, outlined, small, ...rest }: ButtonBtnProps) => (
  <button
    className={`
      ${buttonBase}
      ${outlined ? outlinedButton : ''}
      ${small ? smallButton : ''}
    `}
    {...rest}
  >
    {children}
  </button>
)

export const LinkBtn = ({ children, ...rest }: PropsWithChildren<LinkProps>) => (
  <Link {...rest} className={`
    ${buttonBase}
  `}>
    {children}
  </Link>
);
