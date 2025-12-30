import { useStateWithRef } from 'use-state-with-ref';

const [, , valueRef] = useStateWithRef<number>();
const value: number | undefined = valueRef.current;

console.log(value);
