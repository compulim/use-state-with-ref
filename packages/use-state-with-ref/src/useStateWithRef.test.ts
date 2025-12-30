import { act } from '@compulim/test-harness/act';
import { renderHook } from '@compulim/test-harness/renderHook';
import { expect } from 'expect';
import { test } from 'node:test';
import { type Dispatch, type RefObject, type SetStateAction } from 'react';
import { type useRefFrom } from 'use-ref-from';
import useStateWithRef from './useStateWithRef.ts';

type ReadonlyRefObject<T> = ReturnType<typeof useRefFrom<T>>;

test('should have initial value', () => {
  const { result } = renderHook(() => useStateWithRef(123)[0]);

  expect(result).toHaveProperty('current', 123);
});

test('should have initial value setter', () => {
  const { result } = renderHook(() => useStateWithRef(() => 123)[0]);

  expect(result).toHaveProperty('current', 123);
});

test('should have setter', async () => {
  let hoistedSetValue: Dispatch<SetStateAction<number>>;

  const { result } = renderHook(() => {
    const [value, setValue] = useStateWithRef(123);

    hoistedSetValue = setValue;

    return value;
  });

  expect(result).toHaveProperty('current', 123);

  act(() => hoistedSetValue(789));

  expect(result).toHaveProperty('current', 789);
});

test('should have RefObject', async () => {
  let hoistedSetValue: Dispatch<SetStateAction<number>>;
  let hoistedValueRef: ReadonlyRefObject<number> | undefined;

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

test('should not change setter and RefObject', async () => {
  const hoistedSetValues: Dispatch<SetStateAction<number>>[] = [];
  const hoistedValueRefs: RefObject<number>[] = [];
  let numRender = 0;

  const { result } = renderHook(() => {
    const [value, setValue, valueRef] = useStateWithRef(123);

    numRender++;
    hoistedSetValues.push(setValue);
    hoistedValueRefs.push(valueRef);

    return value;
  });

  expect(result).toHaveProperty('current', 123);
  expect(hoistedValueRefs[0]).toHaveProperty('current', 123);

  act(() => hoistedSetValues[0]?.(789));

  expect(numRender).toBe(2);

  expect(result).toHaveProperty('current', 789);
  expect(hoistedValueRefs[0]).toHaveProperty('current', 789);

  expect(hoistedSetValues).toHaveLength(2);
  expect(hoistedSetValues[0]).toEqual(hoistedSetValues[1]);

  expect(hoistedValueRefs).toHaveLength(2);
  expect(hoistedValueRefs[0]).toEqual(hoistedValueRefs[1]);
});

test('should marked as read-only', () => {
  const { result } = renderHook(() => Object.isFrozen(useStateWithRef(123)));

  expect(result).toHaveProperty('current', true);
});
