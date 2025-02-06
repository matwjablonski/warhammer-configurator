import { LinkProps } from 'next/link';
import { ButtonBtn, LinkBtn } from './styles';
import { ButtonHTMLAttributes } from 'react';

type NotAsLinkProps = { asLink?: false; label: string; } & ButtonHTMLAttributes<HTMLButtonElement>;
type AsLinkProps = { asLink: true; label: string; } & LinkProps;

type ButtonProps = 
  | AsLinkProps
  | NotAsLinkProps;

export const Button = ({ label, asLink, ...rest}: ButtonProps) => {
  if (asLink) {
    return (
      <LinkBtn {...rest as LinkProps}>{label}</LinkBtn>
    )
  }

  return (
    <ButtonBtn {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {label}
    </ButtonBtn>
  )
}
