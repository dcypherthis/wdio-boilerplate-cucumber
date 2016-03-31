module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        webdriver: {
            test: {
                configFile: './suite.conf.js'
            },
            dev: {
                configFile: './dev.conf.js'
            },
            prod: {
                configFile: './prod.conf.js'
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
