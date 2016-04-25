/*
 * Given Steps
 */

const examplePage = require('../pages/example.page');

module.exports = function(){

    this.Given(/^I am on the search page$/, () => {
        browser.url(examplePage.googleUrl);
        browser.getTitle().should.equal(examplePage.googlePageTitle);
    });
};
