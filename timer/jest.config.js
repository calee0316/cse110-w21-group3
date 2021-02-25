module.exports = {
  // Your normal jest config settings
  testPathIgnorePatterns: ['<rootDir>/cypress/'],
  testEnvironment: 'jsdom',
  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,
  // The directory where Jest should output its coverage files
  coverageDirectory: 'jest-coverage'
}
