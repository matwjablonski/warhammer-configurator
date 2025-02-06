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

export const ButtonBtn = ({ children, ...rest }: PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>) => (
  <button
    className={`
      ${buttonBase}
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
