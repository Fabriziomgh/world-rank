export const formaterNumber = (value: number) => {
   return new Intl.NumberFormat('en-US').format(value);
};
