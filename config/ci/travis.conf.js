require("babel-core/register");
const merge = require("deepmerge");
const masterConf = require("../master.conf.js");
const ciConf = {
  specs: ["./features/**/*.feature"],
  capabilities: [
    {
      browserName: "Chrome",
      platform: "Windows 10",
      version: "52",
      chromedriverVersion: "2.22",
      screenResolution: "1280x1024",
      autoAcceptAlerts: true,
      "tunnel-identifier": process.env.TRAVIS_JOB_NUMBER,
      build: process.env.TRAVIS_BUILD_NUMBER,
      maxInstances: "8",
      webdriverRemoteQuietExceptions: false,
      videoUploadOnPass: false
    }
    //{
    //    browserName: 'Chrome',
    //    platform: 'OS X 10.11',
    //    version: '52',
    //    'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
    //    build: process.env.TRAVIS_BUILD_NUMBER,
    //    autoAcceptAlerts: true,
    //    'tunnel-identifier': process.env.JENKINS_JOB_NUMBER,
    //    build: process.env.JENKINS_BUILD_NUMBER,
    //    maxInstances: '8',
    //    webdriverRemoteQuietExceptions: false,
    //    videoUploadOnPass: false,
    // },
    // {
    //    browserName: 'firefox',
    //    platform: 'Windows 10',
    //    version: '47',
    //    screenResolution: "1280x1024",
    //    autoAcceptAlerts: true,
    //    'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
    //    build: process.env.TRAVIS_BUILD_NUMBER,
    //    maxInstances: '8',
    //    webdriverRemoteQuietExceptions: false,
    //    videoUploadOnPass: false,
    // },
    //{
    //    browserName: 'firefox',
    //    platform: 'OS X 10.11',
    //    version: '47',
    //    screenResolution: "1280x1024",
    //    'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
    //    build: process.env.TRAVIS_BUILD_NUMBER,
    //    build: process.env.JENKINS_BUILD_NUMBER,
    //    maxInstances: '8',
    //    webdriverRemoteQuietExceptions: false,
    //    videoUploadOnPass: false,
    // },
  ],
  logLevel: "error",
  services: ["sauce"],
  user: process.env.SAUCE_USERNAME,
  key: process.env.SAUCE_ACCESS_KEY,
  reporters: ["dot", "spec", "junit"],
  reporterOptions: {
    junit: {
      outputDir: "./reports/junit/"
    }
  },
  cucumberOpts: {
    require: ["./stepDefinitions/"]
  }
};
exports.config = merge(masterConf.config, ciConf);
