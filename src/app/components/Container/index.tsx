import { PropsWithChildren } from 'react';

export const Container = ({ children }: PropsWithChildren) => (
  <div className="max-w-[1100px] mx-auto px-4">{children}</div>
)
