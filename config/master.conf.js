require('babel-core/register');
const debug = process.env.DEBUG;
exports.config = {
    sync: true,
    debug: debug, //eslint-disable-line object-shorthand
    coloredLogs: true,
    screenshotPath: './reports/errorShots/',
    baseUrl: 'https://google.com/',
    waitforTimeout: 30000,
    connectionRetryTimeout: 30000,
    connectionRetryCount: 3,
    framework: 'cucumber',
    cucumberOpts: {
        backtrace: true,   // <boolean> show full backtrace for errors
        compiler: [],       // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
        dryRun: false,      // <boolean> invoke formatters without executing steps
        failFast: false,    // <boolean> abort the run on first failure
        format: ['pretty'], // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
        colors: true,       // <boolean> disable colors in formatter output
        snippets: false,     // <boolean> hide step definition snippets for pending steps
        source: false,       // <boolean> hide source uris
        profile: [],        // <string[]> (name) specify the profile to use
        strict: false,      // <boolean> fail if there are any undefined or pending steps
        tags: [], // ['@only', '@isolate'], // <string[]> (expression) only execute the features or scenarios with tags matching the expression
        timeout: 60000,     // <number> timeout for step definitions
        ignoreUndefinedDefinitions: true, // <boolean> Enable this config to treat undefined definitions as warnings.
    },
    before: function () { //eslint-disable-line object-shorthand
        var chai = require('chai'); //eslint-disable-line no-var
        global.expect = chai.expect;
        chai.Should();
        chai.expect();
    },
};
