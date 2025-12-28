const { act } = require('@compulim/test-harness/act');
const { renderHook } = require('@compulim/test-harness/renderHook');
const { expect } = require('expect');
const { test } = require('node:test');
const { useStateWithRef } = require('use-state-with-ref');

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
