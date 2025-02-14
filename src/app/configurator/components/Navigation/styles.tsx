import { PropsWithChildren } from 'react';

export const Nav = ({ children }: PropsWithChildren) => (
  <nav className="flex justify-between items-center mt-6">
    {children}
  </nav>
)
