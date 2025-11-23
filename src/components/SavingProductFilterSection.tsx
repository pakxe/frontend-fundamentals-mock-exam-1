import useSavingProductFilter from 'hooks/useSavingProductFilter';
import { SelectBottomSheet, Spacing, TextField } from 'tosslib';
import { parseString } from 'utils/parse';

type Props = ReturnType<typeof useSavingProductFilter>;

const SavingProductFilterSection = ({ ...rest }: Props) => {
  return (
    <>
      <TextField
        label="목표 금액"
        placeholder="목표 금액을 입력하세요"
        suffix="원"
        value={parseString({ value: rest.targetAmount, fallbackValue: '' })}
        onChange={e => {
          rest.updateTargetAmount(e.target.value);
        }}
      />

      <Spacing size={16} />

      <TextField
        label="월 납입액"
        placeholder="희망 월 납입액을 입력하세요"
        suffix="원"
        value={parseString({ value: rest.monthlyAmount, fallbackValue: '' })}
        onChange={e => {
          rest.updateMonthlyAmount(e.target.value);
        }}
      />

      <Spacing size={16} />

      <SelectBottomSheet
        label="저축 기간"
        title="저축 기간을 선택해주세요"
        value={rest.terms}
        onChange={e => {
          rest.updateTerms(e);
        }}
      >
        <SelectBottomSheet.Option value={6}>6개월</SelectBottomSheet.Option>
        <SelectBottomSheet.Option value={12}>12개월</SelectBottomSheet.Option>
        <SelectBottomSheet.Option value={24}>24개월</SelectBottomSheet.Option>
      </SelectBottomSheet>
    </>
  );
};

export default SavingProductFilterSection;
