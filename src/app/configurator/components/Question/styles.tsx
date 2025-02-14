import { PropsWithChildren } from 'react';

export const QuestionBox = ({ children }: PropsWithChildren) => (
  <div className="mt-10">{children}</div>
)

export const QuestionTitle = ({ children }: PropsWithChildren) => (
  <h2 className="text-2xl font-bold mb-4 font-medieval text-secondary">{children}</h2>
);

export const QuestionNote = ({ children }: PropsWithChildren) => (
  <p className="text-md text-dark-grey max-w-[60%] mb-4">{children}</p>
);
