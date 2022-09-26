//* Converter data Americana para brasileira.

export const convertDateUS = ( date: string ): string => {
  const dateUs: Date = new Date(date);
  const  day = String(dateUs.getDate()).padStart(2, '0');
  const month = String(dateUs.getMonth() + 1).padStart(2, '0');
  const year = dateUs.getFullYear();
  const currentDate = day + "/" + month + "/" + year;
  return currentDate;
}; 