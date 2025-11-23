import useParamState from './useParamState';

const useSavingProductFilter = () => {
  const { paramState: targetAmount, updateParam: updateTargetAmount } = useParamState<'number'>({
    key: 'targetAmount',
    fallbackValue: 0,
    type: 'number',
  });
  const { paramState: monthlyAmount, updateParam: updateMonthlyAmount } = useParamState<'number'>({
    key: 'monthlyAmount',
    fallbackValue: 0,
    type: 'number',
  });
  const { paramState: terms, updateParam: updateTerms } = useParamState<'number'>({
    key: 'terms',
    fallbackValue: 12,
    type: 'number',
  });

  return {
    targetAmount,
    monthlyAmount,
    terms,
    updateTargetAmount,
    updateMonthlyAmount,
    updateTerms,
  };
};

export default useSavingProductFilter;
