import { useState } from 'react';

const [value, setValue] = useState<number>();
const typedValue: number | undefined = value;

setValue(undefined);

console.log(typedValue);
