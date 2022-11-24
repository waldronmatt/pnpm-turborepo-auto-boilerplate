export const addition = (...a: number[]) =>
  a.reduce((accumulator, value) => accumulator + value, 0);
