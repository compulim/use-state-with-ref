# `use-state-with-ref`

React `useState` with a readonly `RefObject`.

## Background

Components often detect changes of props to check if the component need to be re-rendered. If the function is changed, the component should be re-rendered. To optimize performance, unnecessary changes should be removed.

For example, unless there is an intentional change, the return value of `useCallback` should be kept the same across the lifetime of the component.

`useStateWithRef` call `useState` and appending a readonly `RefObject`. The `RefObject` can be used in `useCallback` to minimize function changes.

## How to use

### Before optimization

```tsx
const MyComponent = ({ onSubmit }) => {
  const [value, setValue] = useState();

  // This callback will be recreated every time <MyComponent> is rendered.
  const handleInput = ({ currentTarget: { value } }) => setValue(value);

  // This callback will be recreated every time <MyComponent> is rendered.
  const handleSubmit = () => onSubmit.current(valueRef.current);

  return (
    // <form> will be re-rendered every time <MyComponent> is rendered.
    <form onSubmit={handleSubmit}>
      <input onInput={handleInput} type="text" value={value} />
    </form>
  );
};
```

### Optimization without `useStateWithRef`

```tsx
const MyComponent = ({ onSubmit }) => {
  const [value, setValue] = useState();
  const onSubmitRef = useRefFrom(onSubmit);
  const valueRef = useRef();

  valueRef.current = value;

  // This callback will never change across the lifetime of <MyComponent> because `setValue` never change.
  const handleInput = useCallback(({ currentTarget: { value } }) => setValue(value), [setValue]);

  // This callback will never change across the lifetime of <MyComponent> because `onSubmitRef` and `valueRef` never change.
  const handleSubmit = useCallback(() => onSubmitRef.current(valueRef.current), [onSubmitRef, valueRef]);

  return (
    // <form> will never re-render across the lifetime of <MyComponent>.
    <form onSubmit={handleSubmit}>
      <input onInput={handleInput} type="text" value={value} />
    </form>
  );
};
```

### Optimization with `useStateWithRef`

```tsx
const MyComponent = ({ onSubmit }) => {
  const [value, setValue, valueRef] = useStateWithRef();
  const onSubmitRef = useRefFrom(onSubmit);

  // This callback will never change across the lifetime of <MyComponent> because `setValue` never change.
  const handleInput = useCallback(({ currentTarget: { value } }) => setValue(value), [setValue]);

  // This callback will never change across the lifetime of <MyComponent> because `onSubmitRef` and `valueRef` never change.
  const handleSubmit = useCallback(() => onSubmitRef.current(valueRef.current), [onSubmitRef, valueRef]);

  return (
    // <form> will never re-render across the lifetime of <MyComponent>.
    <form onSubmit={handleSubmit}>
      <input onInput={handleInput} type="text" value={value} />
    </form>
  );
};
```

## API

```ts
export default function useStateWithRef<S>(
  initialState: S | (() => S)
): [
  S,
  Dispatch<SetStateAction<S>>,
  ReadonlyRefObject<S>
];

export default function useStateWithRef<S = undefined>(): [
  S | undefined,
  Dispatch<SetStateAction<S | undefined>>,
  ReadonlyRefObject<S | undefined>
];
```

## Behaviors

### Why should I use `RefObject` to optimize performance?

When a prop change, a component will need to be re-rendered. This propagation amplifies when passing unchanged props to a large component. Thus, [`memo()`](https://react.dev/reference/react/memo) (a.k.a. [pure component](https://react.dev/reference/react/PureComponent)) helps prevent rendering when no props changed.

[Pure components](https://react.dev/learn/keeping-components-pure) are components which will only re-render when there is any props changed.

Generally, when any `onXXX` callback prop is changed, in most cases, the component should not need to be re-rendered because the callback props may not cause a visual change. In other words, changing `onXXX` will re-render but there will be no visual change (a.k.a. a wasted render).

As props are changed, `memo()` and `PureComponent` could not prevent the wasted render.

Despite `arePropsEqual` and `shouldComponentUpdate` can be used to ignore `onXXX` changes, a bad implementation could easily cause UI issues. Also, some callback functions may have legitimate reasons to cause a re-render. For example, in Fluent UI, changing the `IRenderFunction` should re-render because rows of a `<DetailsList>` could be rendered differently. Thus, `arePropsEqual` and `shouldComponentUpdate` are not generally recommended to use unless in very limited case.

The most effective way to prevent wasted render is to follow [React best practices on pure rendering logic](https://react.dev/learn/keeping-components-pure), make sure all props are immutable and only change them when there is a visual change.

#### Seriously?

Let's look at [`useSyncExternalStore()`](https://react.dev/reference/react/useSyncExternalStore). When the `subscribe()` callback is changed, the `useSyncExternalStore()` hook will re-subscribe. Callback functions should be properly memoized and only change when needed. Otherwise, in `useSyncExternalStore()` case, every re-render will resubscribe again.

## Contributions

Like us? [Star](https://github.com/compulim/use-state-with-ref/stargazers) us.

Want to make it better? [File](https://github.com/compulim/use-state-with-ref/issues) us an issue.

Don't like something you see? [Submit](https://github.com/compulim/use-state-with-ref/pulls) a pull request.
