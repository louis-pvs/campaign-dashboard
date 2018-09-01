/**
 * @param {Number} pxSize - pixel value to be converted to rem
 * @param {Number} basePxSize - base pixel value to be multiply with
 * @returns {string} final css rem value i.e 1rem
 */

export const toRem = (pxSize, basePxSize = 16) => {
  return ((pxSize / basePxSize) * 1).toFixed(2) + 'rem';
};
