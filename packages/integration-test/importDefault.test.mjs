import { test } from 'node:test';
import { expect } from 'expect';
import { useStateWithRef } from 'use-state-with-ref';

// Dynamic imports to handle CJS/ESM compat
const testingLibraryReact = await import('@testing-library/react').catch(() => null);
const testingLibraryReactHooks = await import('@testing-library/react-hooks').catch(() => null);

const act = testingLibraryReact?.act || testingLibraryReactHooks?.act;
const renderHook = testingLibraryReact?.renderHook || testingLibraryReactHooks?.renderHook;

test('simple scenario', async () => {
  let hoistedSetValue;
  let hoistedValueRef;

  const { result } = renderHook(() => {
    const [value, setValue, valueRef] = useStateWithRef(123);

    hoistedSetValue = setValue;
    hoistedValueRef = valueRef;

    return value;
  });

  expect(result).toHaveProperty('current', 123);
  expect(hoistedValueRef).toHaveProperty('current', 123);

  act(() => hoistedSetValue(789));

  expect(result).toHaveProperty('current', 789);
  expect(hoistedValueRef).toHaveProperty('current', 789);
});
