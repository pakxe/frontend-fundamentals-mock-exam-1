type ParseNumberProps = {
  value: number | string | null | undefined;
  fallbackValue: number;
};

export const parseNumber = ({ value, fallbackValue }: ParseNumberProps): number => {
  if (value === '' || value === undefined || value === null) {
    return fallbackValue;
  }

  const parsedNumber = Number(value);

  if (Number.isNaN(parsedNumber)) {
    return fallbackValue;
  }

  return parsedNumber;
};

type ParseStringProps = {
  value: number | string | null | undefined;
  fallbackValue: string;
};

export const parseString = ({ value, fallbackValue }: ParseStringProps) => {
  if (value === undefined || value === null) {
    return fallbackValue;
  }

  return String(value);
};
