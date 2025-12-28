/** @type {(fn: () => void) => void} */
let act;

try {
  ({ act } = await import('@testing-library/react'));
} catch {
  // eslint-disable-next-line import/no-unresolved
  ({ act } = await import('@testing-library/react-hooks'));
}

export { act };
