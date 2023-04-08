module.exports = {
    "verbose": true,
    "moduleFileExtensions": [
      "js",
      "jsx",
      "json"
    ],
    "setupFilesAfterEnv": [
      "./jest.setup.js"
    ],
    "moduleNameMapper": {
      "\\.(css|scss|sass|less)$": "<rootDir>/node_modules/jest-css-modules",
      ".+\\.(css|styl|less|sass|scss|png|jpg|gif|ttf|woff|woff2)$": "jest-transform-stub",
      "^.+\\.svg$": "jest-svg-transformer"
    },
    // "transform": {
    //   "^.+\\.js?$": "babel-jest",
    //   ".+\\.(css|styl|less|sass|scss)$": "jest-transform-css",
    //   "^.+\\.svg(\\?inline)?$": "jest-svg-transformer"
    // },
    "transformIgnorePatterns": [
      "<rootDir>/node_modules/",
      "^.+\\.(css|sass|scss)$"
    ],
    "testPathIgnorePatterns": [
      "<rootDir>/node_modules/"
    ],
    testEnvironment: 'jsdom'
  }