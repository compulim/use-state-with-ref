import React from 'react';

const { useState } = React;

const [value, setValue] = useState<number>();
const typedValue: number | undefined = value;

setValue(undefined);

console.log(typedValue);
