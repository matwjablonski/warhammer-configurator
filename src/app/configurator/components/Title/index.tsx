import { PropsWithChildren } from 'react';

type TitleProps = {
  orderNo: number;
}

export const Title = ({ children, orderNo }: PropsWithChildren<TitleProps>) => (
  <h1 className="text-4xl font-bold mb-4 font-medieval text-secondary flex items-center leading-none">
    <div className="bg-secondary text-white p-2 mr-2 text-center min-w-[54px] leading-none">{orderNo}</div>
    {children}
  </h1>
)
