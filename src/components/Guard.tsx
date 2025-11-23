import { ReactNode } from 'react';

export type GuardBaseProps = {
  isLoading: boolean;
  error: Error | null | undefined;
};

type Props = GuardBaseProps & {
  Component: () => ReactNode | null;
};

const Guard = ({ isLoading, error, Component }: Props) => {
  if (isLoading) {
    return <>로딩중...</>;
  }

  if (error) {
    return <>에러가 발생했습니다.</>;
  }

  return <Component />;
};

export default Guard;
