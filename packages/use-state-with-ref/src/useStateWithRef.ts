import { type Dispatch, type SetStateAction, useState } from 'react';
import { useRefFrom } from 'use-ref-from';

type ReadonlyRefObject<S> = ReturnType<typeof useRefFrom<S>>;

export default function useStateWithRef<S>(
  initialState: S | (() => S)
): [S, Dispatch<SetStateAction<S>>, ReadonlyRefObject<S>];

export default function useStateWithRef<S = undefined>(): [
  S | undefined,
  Dispatch<SetStateAction<S | undefined>>,
  ReadonlyRefObject<S | undefined>
];

export default function useStateWithRef<S>(
  initialState?: S | (() => S)
): readonly [S | undefined, Dispatch<SetStateAction<S | undefined>>, ReadonlyRefObject<S | undefined>] {
  const [value, setter] = useState<S | undefined>(initialState);

  return Object.freeze([value, setter, useRefFrom(value)]);
}
