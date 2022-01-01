/* eslint-disable security/detect-non-literal-fs-filename */
import alias from '@rollup/plugin-alias'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import { terser } from 'rollup-plugin-terser'
import visualizer from 'rollup-plugin-visualizer'

import { getFiles } from './scripts/build-utils'

const extensions = ['.js', '.ts', '.jsx', '.tsx']

export default {
	input: ['./src/index.ts', ...getFiles('./src/components', extensions), ...getFiles('./src/styles', extensions), ...getFiles('./src/hooks', extensions)],
	output: {
		dir: 'dist',
		format: 'esm',
		preserveModules: true,
		preserveModulesRoot: 'src',
		sourcemap: true,
	},
	plugins: [
		resolve(),
		commonjs(),
		typescript({
			tsconfig: './tsconfig.build.json',
			declaration: true,
			declarationDir: 'dist',
		}),
		alias({
			entries: [
				{ find: '@/components', replacement: './src/components' },
				{ find: '@/hooks', replacement: './src/hooks' },
				{ find: '@/styles', replacement: './src/styles' },
			],
		}),
		terser(),
		visualizer({
			filename: 'bundle-analysis.html',
			open: true,
		}),
	],
	external: ['react', 'react-dom'],
}
