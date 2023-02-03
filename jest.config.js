module.exports = () => {
  return {
    setupFilesAfterEnv: [
      "./main.js",
      // "jest-allure/dist/setup"
    ],
    testRegex: "\\.spec\\.js",
    // reporters: ["default",
    //     // "jest-allure"
    // ],
    testEnvironment: "jest-circus-allure-environment",
    testRunner: "jest-circus/runner",
    testFailureExitCode: 0,
  };
};
