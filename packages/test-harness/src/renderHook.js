module.exports = {
  /** @type {<T, P>(render: (props: P) => T, options?: { initialProps: P }) => { rerender: (props: P) => void; result: { current: T } }} */
  // eslint-disable-next-line import/no-unresolved
  renderHook: (require('@testing-library/react') || require('@testing-library/react-hooks')).renderHook
};
