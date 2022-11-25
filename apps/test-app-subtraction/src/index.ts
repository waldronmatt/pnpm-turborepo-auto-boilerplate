/**
 * Subtraction Function
 * @param {array} numbers - an array of numbers.
 * @returns {number} Result of subtracted numbers
 */
export const subtraction = (...a: number[]) =>
  a.length === 0 ? 0 : a.reduce((accumulator, value) => accumulator - value);

// test comment
