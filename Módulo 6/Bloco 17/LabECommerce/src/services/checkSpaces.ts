export const checkSpace = ( value: string ): boolean => {
    return /\s/g.test(value);
};