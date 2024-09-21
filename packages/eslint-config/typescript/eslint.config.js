import globals from 'globals';
import tsEslint from 'typescript-eslint';
import baseConfig from '../base/eslint.config.js';

export default tsEslint.config(...baseConfig, {
  extends: [...tsEslint.configs.recommended],
  files: ['**/*.{ts,tsx}'],
  languageOptions: {
    ecmaVersion: 2020,
    globals: globals.browser,
  },
  rules: {
    '@typescript-eslint/consistent-type-imports': ['error', { fixStyle: 'inline-type-imports' }],
  },
});
