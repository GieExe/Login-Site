// jest.config.js
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    testMatch: [
      '<rootDir>/src/**/*.spec.ts',
      '<rootDir>/src/**/*.test.ts',
      '<rootDir>/src/**/*.spec.tsx',
      '<rootDir>/src/**/*.test.tsx',
    ],
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
    transform: {
      '^.+\\.(ts|tsx)?$': 'ts-jest',  // Force ts-jest to transform ts/tsx files
    },
  };