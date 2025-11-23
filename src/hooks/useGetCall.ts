import { useEffect, useState } from 'react';
import { http, isHttpError } from 'tosslib';

type Props = {
  endpoint: string;
};

const useGetCall = <DataType>({ endpoint }: Props) => {
  const [data, setData] = useState<DataType | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const call = async () => {
      try {
        setIsLoading(true);
        const response = await http.get<DataType>(endpoint);
        setData(response);
      } catch (e) {
        if (isHttpError(e)) {
          setError(e);
        }
      } finally {
        setIsLoading(false);
      }
    };

    call();
  }, [endpoint]);

  return {
    data,
    isLoading,
    error,
  };
};

export default useGetCall;
