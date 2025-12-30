import { defineConfig } from 'tsup';

export default defineConfig([
  {
    dts: true,
    entry: {
      'use-state-with-ref': './src/index.ts'
    },
    format: ['cjs', 'esm'],
    sourcemap: true,
    target: 'esnext'
  }
]);
