module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  collectCoverage: true,
  collectCoverageFrom: [
    "./src/**/*.{js,vue}",
    "!./src/registerServiceWorker.js",
    "!**/node_modules/**",
  ],
};
