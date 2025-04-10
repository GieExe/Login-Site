// .eslintrc.js
module.exports = {
    extends: [
      'eslint:recommended',
      'next/core-web-vitals',
      'plugin:@typescript-eslint/recommended',
      'plugin:react-hooks/recommended',
    ],
    rules: {
      'react/no-unescaped-entities': 'warn',  // Or "error"
      'react-hooks/rules-of-hooks': 'error',
      '@typescript-eslint/no-unused-vars': 'warn', // Or "error"
    },
  };