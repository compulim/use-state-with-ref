import { test } from 'node:test';
import { expect } from 'expect';
import { useStateWithRef } from 'use-state-with-ref';
import { act } from '@compulim/test-harness/act';
import { renderHook } from '@compulim/test-harness/renderHook';

test('simple scenario', async () => {
  /** @type {((value: number) => void) | undefined} */
  let hoistedSetValue;
  /** @type {{ current: number } | undefined} */
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
