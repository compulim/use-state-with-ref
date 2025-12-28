module.exports = {
  /** @type {(fn: () => void) => void} */
  // eslint-disable-next-line import/no-unresolved
  act: (require('@testing-library/react') || require('@testing-library/react-hooks')).act
};
