import { useStateWithRef } from '../index.ts';

const [, , ref] = useStateWithRef<number>(123);
const value: number = ref.current;

console.log(value);
