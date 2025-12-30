import { useStateWithRef } from '../index.ts';

const [, , valueRef] = useStateWithRef<number>();
const value: number | undefined = valueRef.current;

console.log(value);
