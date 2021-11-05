import type {Config} from '@jest/types';

const config: Config.InitialOptions = {
  verbose: true,
  moduleNameMapper: {
    "@/(.*)$": "<rootDir>/src/$1"
  },
  moduleFileExtensions: [
    "js", "json", "vue"
  ],
  transform: {
    ".*\\.(vue)$": "vue3-jest"
  },
  testPathIgnorePatterns: [
    ".eslintrc.js"
  ]
};
export default config;
