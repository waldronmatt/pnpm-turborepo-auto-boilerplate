/**
 * Addition Function
 * @param {array} numbers - an array of numbers.
 * @returns {number} Sum of numbers
 */
export const addition = (...a: number[]) =>
  a.reduce((accumulator, value) => accumulator + value, 0);

// test comment
// changed comment
