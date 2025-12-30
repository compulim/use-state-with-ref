import { useStateWithRef } from 'use-state-with-ref';

const [, , ref] = useStateWithRef<number>(123);
const value: number = ref.current;

console.log(value);
