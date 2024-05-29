# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Breaking changes

- Removed named exports, please import the defaults instead
   - Use `import { useRefFrom } from 'use-ref-from';` instead of `import useRefFrom from 'use-ref-from/wrapWith';`
- Moved build tools from Babel to tsup/esbuild

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
