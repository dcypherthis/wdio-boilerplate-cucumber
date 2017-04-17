require("babel-core/register");
const merge = require("deepmerge");
const masterConf = require("../master.conf.js");
const sauceConf = {
  specs: ["./features/**/*.feature"],
  capabilities: [
    // {
    //    browserName: 'firefox',
    //    platform: 'Windows 10',
    //    version: '47',
    //    screenResolution: "1280x1024",
    //    autoAcceptAlerts: true,
    //    maxInstances: '1',
    //    webdriverRemoteQuietExceptions: false,
    //    videoUploadOnPass: false,
    // },
    //{
    //    browserName: 'firefox',
    //    platform: 'OS X 10.11',
    //    version: '47',
    //    // screenResolution: "1600x1200",
    //    autoAcceptAlerts: true,
    //    maxInstances: '1',
    //    webdriverRemoteQuietExceptions: false,
    //    videoUploadOnPass: false,
    //},
    {
      browserName: "Chrome",
      platform: "Windows 10",
      version: "52",
      screenResolution: "1280x1024",
      autoAcceptAlerts: true,
      maxInstances: "8",
      chromedriverVersion: "2.22",
      webdriverRemoteQuietExceptions: false,
      videoUploadOnPass: false
    }
    //{
    //    browserName: 'Chrome',
    //    platform: 'OS X 10.11',
    //    version: '52',
    //    // screenResolution: "1600x1200",
    //    autoAcceptAlerts: true,
    //    maxInstances: '1',
    //    webdriverRemoteQuietExceptions: false,
    //    videoUploadOnPass: false,
    //},
  ],
  logLevel: "error",
  services: ["sauce"],
  user: process.env.SAUCE_USERNAME,
  key: process.env.SAUCE_ACCESS_KEY,
  sauceConnect: true,
  reporters: ["dot", "spec"],
  cucumberOpts: {
    require: ["./stepDefinitions/"]
  }
};
exports.config = merge(masterConf.config, sauceConf);
