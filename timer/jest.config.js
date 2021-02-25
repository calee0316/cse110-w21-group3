module.exports = {
  // Your normal jest config settings
  testPathIgnorePatterns: ['<rootDir>/cypress/'],
  testEnvironment: 'jsdom',
  collectCoverage: true,
  coverageDirectory: 'jest-coverage',
}
