/*
 * Then Steps
 */

const examplePage = require('../pages/example.page');

module.exports = function(){

    this.Then(/^I should see a list of search results$/, () => {
        browser.pause(2000);
        return browser.isVisible(examplePage.resultsList).should.be.true;
    });
};
