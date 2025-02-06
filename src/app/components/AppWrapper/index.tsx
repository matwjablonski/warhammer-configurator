import { PropsWithChildren } from 'react';

export const AppWrapper = ({ children }: PropsWithChildren) => (
  <main className="shadow-xl bg-background text-black mt-12 mb-12 p-12">
    {children}
  </main>
)
