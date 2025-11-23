import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { parseNumber, parseString } from 'utils/parse';

type NumberProps = {
  key: string;
  type: 'number';
  fallbackValue: number;
};

type StringProps = {
  key: string;
  type: 'string';
  fallbackValue: string;
};

type ResolvedType<T> = T extends 'number' ? number : string;

type Props<T extends 'number' | 'string'> = T extends 'number' ? NumberProps : StringProps;

const useParamState = <T extends 'number' | 'string'>({ key, type, fallbackValue }: Props<T>) => {
  const [params, setParams] = useSearchParams();

  const rawParam = params.get(key);
  let committedParam;

  switch (type) {
    case 'number':
      committedParam = parseNumber({ value: rawParam, fallbackValue });
      break;

    case 'string':
      committedParam = parseString({ value: rawParam, fallbackValue });
      break;

    default:
      committedParam = parseString({ value: rawParam, fallbackValue: fallbackValue as string });
  }

  const [paramState, setParamState] = useState<ResolvedType<T>>(committedParam as ResolvedType<T>);

  const updateParam = (newValue: ResolvedType<T>) => {
    const newParams = new URLSearchParams(params);

    newParams.set(key, parseString({ value: newValue, fallbackValue: fallbackValue as string })); // .

    setParams(newParams);
  };

  useEffect(() => {
    setParamState(committedParam as ResolvedType<T>);
  }, [committedParam]);

  return {
    paramState,
    updateParam,
  };
};

export default useParamState;
