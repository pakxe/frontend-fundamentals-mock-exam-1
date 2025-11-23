import useGetSavingProductList from 'hooks/useGetSavingProductList';
import Guard from './Guard';
import SavingProductList from './SavingProductList';
import useSavingProductFilter from 'hooks/useSavingProductFilter';

type Props = Pick<ReturnType<typeof useSavingProductFilter>, 'monthlyAmount' | 'targetAmount' | 'terms'>;

const SavingProductListSection = (filterValues: Props) => {
  const { savingProductList, isLoading, error } = useGetSavingProductList(filterValues);

  return (
    <Guard
      isLoading={isLoading}
      error={error}
      Component={() => savingProductList && SavingProductList({ savingProductList })}
    />
  );
};

export default SavingProductListSection;
