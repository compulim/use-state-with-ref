import React, { useCallback, type FormEventHandler } from 'react';
import { useStateWithRef } from 'use-state-with-ref';

const App = () => {
  const [value, setValue, valueRef] = useStateWithRef('Hello, World!');

  const handleInput = useCallback<FormEventHandler<HTMLInputElement>>(
    ({ currentTarget: { value } }) => setValue(value),
    [setValue]
  );

  const handleSubmit = useCallback<FormEventHandler<HTMLFormElement>>(
    event => {
      event.preventDefault();
      alert(valueRef.current);
    },
    [valueRef]
  );

  return (
    <form onSubmit={handleSubmit}>
      <input onInput={handleInput} value={value} />
      <input type="submit" />
    </form>
  );
};

export default App;
