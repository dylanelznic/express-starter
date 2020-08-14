module.exports = {
  moduleNameMapper: {
    '^config(.*)$': '<rootDir>/dist/config$1',
    '^db(.*)$': '<rootDir>/dist/db$1',
    '^routes(.*)$': '<rootDir>/dist/routes$1',
    '^services(.*)$': '<rootDir>/dist/services$1',
  },
  preset: 'ts-jest',
  testEnvironment: 'node',
};
