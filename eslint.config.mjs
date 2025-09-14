import { FlatCompat } from '@eslint/eslintrc'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname
})

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  ...compat.extends('prettier'),
  {
    ignores: [
      'node_modules/**',
      '.next/**',
      'out/**',
      'build/**',
      'next-env.d.ts',
      'coverage/**',
      '.vscode/**',
      '*.json'
    ]
  },
  {
    plugins: {
      prettier: (await import('eslint-plugin-prettier')).default
    },
    rules: {
      'prettier/prettier': 'error',
      // Disable ESLint rules that conflict with Prettier
      'arrow-body-style': 'off',
      'prefer-arrow-callback': 'off'
    }
  },
  // Test file specific configuration
  {
    files: ['**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    languageOptions: {
      globals: {
        vi: 'readonly',
        describe: 'readonly',
        it: 'readonly',
        expect: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
        beforeAll: 'readonly',
        afterAll: 'readonly'
      }
    },
    rules: {
      // Allow devDependencies in test files
      'import/no-extraneous-dependencies': ['error', { devDependencies: true }]
    }
  }
]

export default eslintConfig
