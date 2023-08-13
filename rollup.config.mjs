import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';

export default {
  input: 'src/app.js',
  output: [
    {
      file: 'dist/pyspeer.js',
      format: 'cjs'
    },
    {
      file: 'dist/pyspeer.min.js',
      format: 'cjs',
      name: 'pyspeer',
      plugins: [terser()]
    },
  ],
  plugins: [
    nodeResolve(),
    commonjs()
  ]
};
