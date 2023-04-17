const path = require("path");

module.exports = {
  verbose: true,
  roots: ["<rootDir>/src"],
  testEnvironment: "jsdom",
  globals: {
    ENV: "development",
  },
  testMatch: [
    "**/__tests__/**/?(*.)+(spec|test).+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)",
  ],
  testPathIgnorePatterns: ["<rootDir>/node_modules/"],
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}",
    "!<rootDir>/src/*.tsx",
    "!<rootDir>/src/**/(*styles.js)",
    "!<rootDir>/src/api/**/*",
    "!<rootDir>/src/constants/**/*",
    "!<rootDir>/src/test-utils/**/*",
    "!<rootDir>/src/mocks/**/*",
  ],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
  },
  setupFilesAfterEnv: [
    "@testing-library/jest-dom/extend-expect",
    "<rootDir>/src/test-utils/jest.setup.js",
  ],
  transformIgnorePatterns: ["<rootDir>/node_modules/(?!@hookform/.*)"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  moduleNameMapper: {
    "@api(.*)$": "<rootDir>/src/api$1",
    "@components(.*)$": "<rootDir>/src/components$1",
    "@constants(.*)$": "<rootDir>/src/constants$1",
    "@data(.*)$": "<rootDir>/src/data$1",
    "@hooks(.*)$": "<rootDir>/src/hooks$1",
    "@layouts(.*)$": "<rootDir>/src/layouts$1",
    "@styles(.*)$": "<rootDir>/src/styles$1",
    "^types(.*)$": "<rootDir>/src/types$1",
    "@utils(.*)$": "<rootDir>/src/utils$1",
    "@views(.*)$": "<rootDir>/src/views$1",
    "@test-utils(.*)$": "<rootDir>/src/test-utils$1",
  },
};
