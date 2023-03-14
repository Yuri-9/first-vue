export const isValidDate = (date: Date) => date instanceof Date && new Date(date).toString() !== 'Invalid Date';

export const getYear = (date: string | number | Date): string => {
  if (isValidDate(new Date(date))) {
    return new Date(date).getFullYear().toString();
  }
  return '';
};
