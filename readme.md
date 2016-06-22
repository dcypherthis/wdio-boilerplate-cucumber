# WebdriverIO Boilerplate -  Cucumber

[![Build Status](https://travis-ci.org/dcypherthis/wdio-boilerplate-cucumber.svg?branch=master)](https://travis-ci.org/dcypherthis/wdio-boilerplate-cucumber)

*v 2.0.3*

## Overview

This project is an example of how to get started with Webdriverio for Selenium testing in Node.js. It makes use of the Cucumber BDD framework and works with dot, junit, and allure reporters.  It is ES6 friendly (via babel-register) and uses Grunt to manage tasks.

### Setup

This project currently supports ***Node 4.2.4*** and up.  While earlier versions of node may be compatible, they have not been tested or verified.

If you have nvm installed globally, you run `nvm install` to get the latest version of node specified in the`.nvmrc` file [here](/.nvmrc).  If you don't use nvm, be sure that you are using a compatible version. Further details on nvm can be found on the official [github page](https://github.com/creationix/nvm). MAC OSX users are best suited to install nvm with homebrew `brew install nvm`.

Now run `npm install` to grab all dependencies.

To take full advantage of the command line and use grunt tasks you will need to make sure that you have added `node_modules/.bin` to your `$PATH`.  Otherwise you will need to install the following globally:

```npm install -g  grunt-cli```

#### Selenium

Now let's get a selenium selenium server up and running. You **MUST** have selenium running to execute any webdriverIO tests, or it will fail fast with an error.

For development, you can run `npm run selenium`.  That's all there is to it.!

Selenium is very taxing on memory and CPU and will you may need to kill it.  Assuming you do not have any other java processes running, you can use `pkill java` to terminate it. For a less invasive approach you can find the process with `lsof -i tcp:4444` and then terminate that specific process by PID.

#### Docker & Selenium

You can alternatively run selenium with docker.  If you haven't yet, please visit [docker's website](https://www.docker.com/) and follow the ***Getting Started*** link.  This will give you a wealth of great information about how docker works and install docker toolbox onto your machine.  It is recommended that you go through their entire tutorial in their getting started guide before you proceed.

***Now you can launch docker-selenium.***

First open a new docker shell in terminal with the the environment variables set. Docker toolbox has a handy way to do this with a tool called "Docker Quickstart Terminal", which will launch your terminal of choice, launch docker-machine if it's not started yet, and set environment variables for you to interact with the docker daemon.

Now you can launch your container with  `docker run --name sel_ff -p 4444:4444  selenium/standalone-firefox`.
This will launch a new container service named *sel_ff*, expose port 4444 (selenium's default port), and launch a headless version of firefox.

You can alternatively launch a debug version of selenium-standalone via docker that you can watch by connecting to a specific port through a VNC connection.

If you have a selenium container already running, stop it with `docker stop <container name>`.  Launch a new container service with `docker run --name sel_ff_debug -p 4444:4444 -p 5900:5900 selenium/standalone-firefox-debug`.  This will launch a firefox instance that exposes a visual layer to port 5900.  From your shell run `open vnc://:secret@192.168.99.100:5900`.  This will launch a screen sharing session for you to watch watch the browser.

#### Other useful docker commands

- `docker ps` - shows all containers currently running
- `docker stop CONTAINER_NAME` - stops a container
- `docker rm CONTAINER_NAME` - removes an existing container.
- `docker stats` - shows current CPU, Memory, and network usage for each container
- `docker kill CONTAINER_NAME` - kills a container (in case selenium hangs up)
- `docker logs -f CONTAINER_NAME` - follow the console output of the specified container
- `docker-compose down` - stops and removes containers created with compose
- `docker-compose stop` - stops all running containers created with compose.

#### Selenium Grid

You may want to execute tests against multiple browsers at the same time.  The project root contains a  `docker-compose.yml` file that you can use to launch a selenium grid with a hub container, a firefox node, and a chrome node. Launch a docker shell and enter `docker-compose up`. This will download all the dependencies, launch the containers and register them to the hub.  You still need to specify the browsers you want the tests to execute in the test configuration file, otherwise only firefox will be used by default.

#### Selenium Grid Philosophy

Selenium grids are used to test applications in parallel across many browsers. In the past, VM provisioning was difficult and time consuming, so we would provision super boxes with large amounts of memory that could have dozens of nodes.  Docker has main this provisioning process nearly painless and exponentially cheaper, so we no longer need larger instances with dozens of nodes, but can now leverage dozens of smaller instances with a couple of nodes each. This allows us to fine tune each grid to use an optimum amount of memory and CPU. Each Grid consists of a hub and at least 2 nodes (firefox + chrome). These execute a single test in parallel for that particular grid. Since WebdriverIO fires off a child process for each test, we can run them all in parallel but launching an appropriate number of grids.

### Run Some Tests

To execute the entire test suite in local development, use `grunt webdriver:test`.  This executes all features in the `/test/features` directory with a dot reporter by default and references the `suite.conf.js` file.

You can alternatively execute tests by running `node_modules/.bin/wdio <configfile>` from the project base directory. If you would like to specify a different configuration file, just run `wdio <path/to/config/file>` or add it to the Gruntfile.

WebdriverIO's command line utility can walk you through the configuration process by running `node_module/.bn/wdio config`. This will ask question step by step to help you generate your new configurations.

***Note to docker users:*** You will need to edit your ***.conf.js file(s) and add the docker host IP and and port for the test runner to communicate with docker.  Default variables *(Host & Port)* **MUST** be at the top of the configuration file to override the default config, as the the config file executes synchronously.

#### Config Files

WebdriverIO uses configuration files to setup and execute tests in specific ways.  The configuration is fully customizable, and different functions can be invoked before, during and after each test or test suite.  Config files are found in the `/test/config/` directory and all end with `*.conf.js`.  These can be called via the the cli  `wdio test/config/*.conf.js` or by setting up a grunt task in the `Gruntfile`.

To generate new config files from scratch, you can use the wdio cli and run `wdio init`.  This will walk you through the basic configuration process.  Please note that you will need to manually configure babel register for ES6 transformation and add any assertion libraries like chai or chai-as-promised in the hooks section of the config file.

Further information of the wdio config can be found in the [Developer Guide](http://webdriver.io/guide/testrunner/configurationfile.html).

#### Reporters

WebdriverIO uses several different types of test reporters to communicate pass/failure.  In versions previous to 4.0, the spec reporter was used.  This has been deprecated in favor of the dot reporter as multiple instances of WebdriverIO can now fire simultaneously.

##### Dot

The dot reporter is the default reporter for the WDIO test runner. To use the dot reporter just add 'dot' to the reporters array in the config file. The dot reporter prints for each test spec a dot. If colors are enabled on your machine you will see three different colors for dots. Yellow dots mean that at least one browser has executed that spec. A green dot means all browser passed that spec and a red to means that at least one browser failed that spec. All config files have this turned on by default.

##### junit/xunit

The JUnit reporter helps you to create xml reports for your CI server. Add it to the reports array in the config file and define the directory where the xml files should get stored. WebdriverIO will create an xml file for each instance under test and the filename will contain the browser and OS.  The `prod.conf.js` file has this turned on by default.

##### Allure

The Allure Reporter creates [Allure](http://allure.qatools.ru/) test reports which is an HTML generated website with all necessary information to debug your test results and take a look on error screenshots. Add allure to the reporters array in config file and define the output directory of the allure reports.

To generate and view an allure report locally, run `npm run report`.

Allure has several other reporting tools optimized for the CI server of your choice.  You can [view the documentation here](http://wiki.qatools.ru/display/AL/Reporting).

### Write Some Tests

Tests are written in the Cucumber framework using the Gherkin Syntax. More about Gherkin & Cucumber can be found at [https://cucumber.io/docs/reference](https://cucumber.io/docs/reference).

Tests are place in `*.feature` files in the `/tests/features/` directory.

A typical test will look similar to this:

```
Feature: Write Some Tests

    As a developer
    I want to write some tests
    So I can make sure my code works

Background:

   Given I am a developer

Scenario: Making Stuff Happen

  Given I did some things
  When  I do some other things
  Then  I expect something to happen

```

#### Cucumber Overview

Cucumber tests are written from the user's perspective with no regard for the technology at work. This is considered Behavior-Driven-Development and is a popular form of acceptance testing.  In behavior driven development, we define the scenarios we expect for our users to experience, and make assertions about whether or not we observed the expected outcome after performing specific actions.  ***THIS IS NOT A REPLACEMENT FOR UNIT/INTEGRATION/FUNCTIONAL TESTING!!***  UI based acceptance tests are another layer to the testing pyramid, not the de-facto method of automated testing.

##### Feature

Every Feature should have a name and a description. These could be one in the same, but typically they have a short name and an accompanying user story.

##### Scenario

A feature can and will usually contain many scenarios.  These can be used to test variations of the feature or for negative tests.  Scenarios do execute synchronously, so you can possibly create a condition in one scenario, and act upon it in another.  While this is possible, it is ***HIGHLY*** recommended that each feature and each scenario act in full isolation and independence of one another to reduce the frailness test cases and to increase their reusability.

##### Background

Shared *GIVEN* statements across multiple scenarios can be placed in the **Background:**.

#### Statements

**GIVEN** statements establish a condition that is necessary for the rest of the scenario to succeed.

**WHEN** statements describe an action that is performed.

An **AND** statement following a **WHEN** statement will be parsed into another **WHEN** statement.

**THEN** Statements are typically some sort of assertion of state, content, location, etc.

An **AND** statement following a **THEN** statement will be parsed into another **THEN** statement.

*There is no length to the number of statements a feature can have.*

### Define Your Step Definitions

Now you need to turn Gherkin statements into functions.  Cucumber helps you do this by providing some boilerplate code.

Simply run `grunt cucumberjs` and you will get an output similar to this:

```
this.Given(/^I am a developer$/, callback () => {
  // Write code here that turns the phrase above into concrete actions
  callback.pending();
});

this.Given(/^I did some things$/, callback () => {
  // Write code here that turns the phrase above into concrete actions
  callback.pending();
});

this.When(/^I do some other things$/, callback () => {
  // Write code here that turns the phrase above into concrete actions
  callback.pending();
});

this.Then(/^I expect something to happen$/, callback () => {
  // Write code here that turns the phrase above into concrete actions
  callback.pending();
});
```

You can either create a new javascript file in the `/test/support/stepDefinitions/` directory, or add this code to an existing file. Remember that WDIO v.4+ uses synchronous commands by default, and no longer requires promises.

From here you can use the [WebdriverIO API](http://webdriver.io/guide.html) & [developer guide](http://webdriver.io/api.html) to write your automation.

#### Sync vs Async

The biggest addition to WebdriverIO is that everything is now synchronous by default.  No promises are necessary and steps will execute in the order they are written. All commands are now blocking the execution of the test process until they’ve resolved.  Please note that generators cannot be used with synchronous code.

You can globally change the behavior of test specs by setting `sync=false` in the config file.  This will force every spec to fire asynchronously.

Occasionally, you may want to invoke a single async function. This is accomplished by setting a function's name to `async`.

```
describe('some feature', function () {
    // ...
    it('I am an old test running asynchronous', function async () {
        return browser
            .url('...')
            .click('button=some button')
            .getText('.myElem').then(function (text) {
                expect(text).to.be.equal('some text');
            })
    });

    it('I am a new test running synchronous', function () {
        browser.url('...');

        var button = browser.element('.myButton');
        button.click();

        expect(browser.getText('label')).to.be.equal('some text');
    });
});
```

### The Page Object Pattern

One of the challenges of writing test automation is keeping your [selectors](http://webdriver.io/guide/usage/selectors.html) (classes, id's, or xpath') up to date with the latest version of your code.  The next challenge is to keep the code you write nice and [DRY](http://code.tutsplus.com/tutorials/3-key-software-principles-you-must-understand--net-25161) (don't repeat yourself).  The page object pattern helps us accomplish this in one solution.  Instead of including our selectors in our step definitions, we instead place them in a `<pagename>.js` file where we can manage all these selectors together.

You can also place reusable functions or logic inside of these pages and call them from your step files. The page object serves as a layer of abstraction between tests and code.  When A test fails, it fails on a individual step.  That step may call a selector that is no longer valid, but that selector may be used by many other steps.  By having a single source of truth of what the selector is supposed to be, fixing one selector on the page object could repair a number of failing tests that were affected by the same selector.

An object called `Page` will be created with the prototype model.  This ensures that every instance of a page object is exported as a stateless construct. Any any changes to that state are handled in the browser, rather than on the server.

It is preferable to separate page objects into individual files that end with `.page.js`.  These will require the basic `page.js` prototype construct and create new objects for each individual page.

For information on how the page object pattern is implemented in webdriverIO, visit [this topic page](http://webdriver.io/guide/testrunner/pageobjects.html) in the developer guide.

Further reading on the page object design pattern can be found on [Martin Fowler's website](http://martinfowler.com/bliki/PageObject.html).

## Be sure to lint your files

`npm run lint`

Some things are just the way they are with cucumber, so you may need to add single line exclusions for your Given/When/Then statements with  `eslint-line-disable new-cap`.

With page objects, we want all our selectors to be in line so we can see them easier, so you will want to disable the lint on those lines as well.

`eslint-disable-line key-spacing`


## Need help?

If you have questions or any problems using WebdriverIO join the [Gitter Chat](https://gitter.im/webdriverio/webdriverio), reach out on Twitter or just file an [issue](https://github.com/webdriverio/webdriverio/issues) on Github. The WebdriverIO contributor community is very active and responsive to problems and questions.  Improvements are being made and issues are being closed every day.

Also if you miss any feature, let us know so we can make WebdriverIO even better. For news or announcements check @WebdriverIO on Twitter.

#### History

WebdriverIO was originated by [Camilo Tapia's](https://github.com/camme) initial Selenium project called WebdriverJS, which was the first Webdriver project on NPM. In 2014, the project was renamed [WebdriverIO](https://github.com/webdriverio/webdriverio) later on. This boilerplate is a pre-configured version of webdriverIO meant to jump-start the process of writing new test automation or adding test automation to existing node.js applications.  You can start from scratch by viewing the official guide [here](http://webdriver.io/guide/getstarted/install.html).

#### License

MIT
