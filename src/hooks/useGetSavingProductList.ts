import useGetCall from './useGetCall';
import { SavingProduct } from 'apis/savings';
import useSavingProductFilter from './useSavingProductFilter';
import { useMemo } from 'react';

type Props = Pick<ReturnType<typeof useSavingProductFilter>, 'monthlyAmount' | 'targetAmount' | 'terms'>;

const useGetSavingProductList = ({ monthlyAmount, targetAmount, terms }: Props) => {
  const { data, isLoading, error } = useGetCall<SavingProduct[]>({ endpoint: '/api/savings-products' });

  const filteredData = useMemo(() => {
    return data
      ? data.filter(product => {
          console.log(product, monthlyAmount, targetAmount, terms);
          if (product.availableTerms !== terms) return false;

          if (monthlyAmount < product.minMonthlyAmount || monthlyAmount > product.maxMonthlyAmount) return false;

          const totalPrincipal = monthlyAmount * terms;

          const rateDecimal = product.annualRate / 100;
          const totalInterest = monthlyAmount * ((terms * (terms + 1)) / 2) * (rateDecimal / 12);

          const estimatedTotal = totalPrincipal + totalInterest;

          return estimatedTotal >= targetAmount;
        })
      : [];
  }, [data, monthlyAmount, targetAmount, terms]);

  return { savingProductList: filteredData, isLoading, error };
};

export default useGetSavingProductList;
