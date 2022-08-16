export const clearSpecialCharacters = ( value: string ) => {
  return value.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
};