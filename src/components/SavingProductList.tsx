import { SavingProduct } from 'apis/savings';
import { colors, ListRow } from 'tosslib';

type Props = {
  savingProductList: SavingProduct[];
};

const SavingProductList = ({ savingProductList }: Props) => {
  return (
    <>
      {savingProductList.map(savingProduct => (
        <ListRow
          contents={
            <ListRow.Texts
              type="3RowTypeA"
              top={savingProduct.name}
              topProps={{ fontSize: 16, fontWeight: 'bold', color: colors.grey900 }}
              middle={`연 이자율: ${savingProduct.annualRate}%`}
              middleProps={{ fontSize: 14, color: colors.blue600, fontWeight: 'medium' }}
              bottom={`${savingProduct.minMonthlyAmount.toLocaleString('ko-kr')}원 ~ ${savingProduct.maxMonthlyAmount.toLocaleString('ko-kr')}원 | ${savingProduct.availableTerms}개월`}
              bottomProps={{ fontSize: 13, color: colors.grey600 }}
            />
          }
        ></ListRow>
      ))}
    </>
  );
};

export default SavingProductList;
