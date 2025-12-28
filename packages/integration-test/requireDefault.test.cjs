const { test } = require('node:test');
const { expect } = require('expect');
const { useStateWithRef } = require('use-state-with-ref');

const act = require('@testing-library/react').act || require('@testing-library/react-hooks').act;

const renderHook = require('@testing-library/react').renderHook || require('@testing-library/react-hooks').renderHook;

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
