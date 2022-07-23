//* Converter data Brasileira para americana.

export const convertDateBR = ( date: string ): string => {
  return date?.split("/").reverse().join("-");
};

const dateUs: Date = new Date();
const  day = String(dateUs.getDate()).padStart(2, '0');
const month = String(dateUs.getMonth() + 1).padStart(2, '0');
const year = dateUs.getFullYear();
export const currentDateUS = year + "-" + month + "-" + day;