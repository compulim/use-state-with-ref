# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Breaking changes

- Removed named exports, please import the defaults instead
   - Use `import { useStateWithRef } from 'use-state-with-ref'` instead
- Moved build tools from Babel to tsup/esbuild

### Changed

- Bumped dependencies, in PR [#28](https://github.com/compulim/use-state-with-ref/pull/28), and [#31](https://github.com/compulim/use-state-with-ref/pull/31)
   - Development dependencies
      - [`@babel/preset-env@7.24.7`](https://npmjs.com/package/@babel/preset-env/v/7.24.7)
      - [`@babel/preset-react@7.24.7`](https://npmjs.com/package/@babel/preset-react/v/7.24.7)
      - [`@babel/preset-typescript@7.24.7`](https://npmjs.com/package/@babel/preset-typescript/v/7.24.7)
      - [`@testing-library/react@16.0.0`](https://npmjs.com/package/@testing-library/react/v/16.0.0)
      - [`@tsconfig/recommended@1.0.6`](https://npmjs.com/package/@tsconfig/recommended/v/1.0.6)
      - [`@tsconfig/strictest@2.0.5`](https://npmjs.com/package/@tsconfig/strictest/v/2.0.5)
      - [`@types/jest@29.5.12`](https://npmjs.com/package/@types/jest/v/29.5.12)
      - [`@types/react@18.3.3`](https://npmjs.com/package/@types/react/v/18.3.3)
      - [`@types/react-dom@18.3.0`](https://npmjs.com/package/@types/react-dom/v/18.3.0)
      - [`esbuild@0.21.5`](https://npmjs.com/package/esbuild/v/0.21.5)
      - [`jest@29.7.0`](https://npmjs.com/package/jest/v/29.7.0)
      - [`jest-environment-jsdom@29.7.0`](https://npmjs.com/package/jest-environment-jsdom/v/29.7.0)
      - [`react@18.3.1`](https://npmjs.com/package/react/v/18.3.1)
      - [`react-dom@18.3.1`](https://npmjs.com/package/react-dom/v/18.3.1)
      - [`react-test-renderer@18.3.1`](https://npmjs.com/package/react-test-renderer/v/18.3.1)
      - [`tsup@8.1.0`](https://npmjs.com/package/tsup/v/8.1.0)
      - [`typescript@5.5.2`](https://npmjs.com/package/typescript/v/5.5.2)

## [0.1.0] - 2024-04-01

### Changed

- Relaxed peer dependencies requirements to `react@>=16.8.0`, by [@compulim](https://github.com/compulim) in PR [#20](https://github.com/compulim/use-state-with-ref/pull/20)
- Bumped dependencies, by [@compulim](https://github.com/compulim), in PR [#16](https://github.com/compulim/use-state-with-ref/pull/16), [#18](https://github.com/compulim/use-state-with-ref/pull/18), and [#20](https://github.com/compulim/use-state-with-ref/pull/20)
   - Production dependencies
      - [`@babel/runtime-corejs3@7.23.6`](https://npmjs.com/package/@babel/runtime-corejs3)
      - [`use-ref-from@0.1.0`](https://npmjs.com/package/use-ref-from)
   - Development dependencies
      - [`@babel/cli@7.23.4`](https://npmjs.com/package/@babel/cli)
      - [`@babel/core@7.23.6`](https://npmjs.com/package/@babel/core)
      - [`@babel/plugin-transform-runtime@7.23.6`](https://npmjs.com/package/@babel/plugin-transform-runtime)
      - [`@babel/preset-env@7.23.6`](https://npmjs.com/package/@babel/preset-env)
      - [`@babel/preset-react@7.23.3`](https://npmjs.com/package/@babel/preset-react)
      - [`@babel/preset-typescript@7.23.3`](https://npmjs.com/package/@babel/preset-typescript)
      - [`@testing-library/react@14.1.2`](https://npmjs.com/package/@testing-library/react)
      - [`@tsconfig/recommended@1.0.3`](https://npmjs.com/package/@tsconfig/recommended)
      - [`@types/jest@29.5.11`](https://npmjs.com/package/@types/jest)
      - [`@types/react@18.2.45`](https://npmjs.com/package/@types/react)
      - [`@typescript-eslint/eslint-plugin@6.14.0`](https://npmjs.com/package/@typescript-eslint/eslint-plugin)
      - [`@typescript-eslint/parser@6.14.0`](https://npmjs.com/package/@typescript-eslint/parser)
      - [`eslint-plugin-prettier@5.0.1`](https://npmjs.com/package/eslint-plugin-prettier)
      - [`eslint-plugin-react@7.33.2`](https://npmjs.com/package/eslint-plugin-react)
      - [`eslint@8.56.0`](https://npmjs.com/package/eslint)
      - [`jest-environment-jsdom@29.7.0`](https://npmjs.com/package/jest-environment-jsdom)
      - [`jest@29.7.0`](https://npmjs.com/package/jest)
      - [`prettier@3.1.1`](https://npmjs.com/package/prettier)
      - [`typescript@5.3.3`](https://npmjs.com/package/typescript)
- Updated pull request validation to test against various React versions, in PR [#19](https://github.com/compulim/use-state-with-ref/pull/19)
   - Moved from JSX Runtime to JSX Classic to support testing against React 16

## [0.0.1] - 2023-09-24

### Added

- First public release

[0.1.0]: https://github.com/compulim/use-state-with-ref/compare/v0.0.1...v0.1.0
[0.0.1]: https://github.com/compulim/use-state-with-ref/releases/tag/v0.0.1
