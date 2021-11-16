/* eslint-disable no-console */
import commonjs from '@rollup/plugin-commonjs';
import includePaths from 'rollup-plugin-includepaths';
import json from '@rollup/plugin-json';
import nodeResolve from '@rollup/plugin-node-resolve';
import progress from 'rollup-plugin-progress';
import replace from 'rollup-plugin-replace';

export default {
  input: './src/main.js',
  onwarn: onWarn,
  output: {
    file: './public/js/main.js',
    format: 'iife',
    sourcemap: true,
    strict: false,
    globals: {
        'util': JSON.stringify({inspect: {custom: null}}),
    },
  },
  plugins: [
    progress(),
    nodeResolve({ dedupe: ['object-inspect'] }),
    commonjs(),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    json({ indent: '' })
  ]
};

function onWarn(warning, warn) {
  // skip certain warnings
  if (warning.code === 'CIRCULAR_DEPENDENCY') return;
  if (warning.code === 'EVAL') return;

  // Use default for everything else
  console.log(warning.code);
  warn(warning);
}
