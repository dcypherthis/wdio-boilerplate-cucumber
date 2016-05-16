module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        webdriver: {
            test: {
                configFile: './test/config/suite.conf.js'
            },
            testSauce: {
                configFile: './test/config/suite.sauce.conf.js'
            },
            prod: {
                configFile: './test/config/prod.conf.js'
            }
        },
        cucumberjs: {
            src: 'test/features',
            options: {
                steps: 'test/support/stepDefinitions/',
                format: 'pretty'
            }
        }

    });

    grunt.loadNpmTasks('grunt-cucumberjs');
    grunt.loadNpmTasks('grunt-webdriver');
    grunt.registerTask('default', ['cucumberjs']);

};
