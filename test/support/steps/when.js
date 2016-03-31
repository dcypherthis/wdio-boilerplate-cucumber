module.exports = function () {

    this.When(/^I enter "([^"]*)" into the search box$/, function (arg1, callback) {
        // Write code here that turns the phrase above into concrete actions
        callback.pending();
    });

    this.When(/^I click the search button$/, function (callback) {
        // Write code here that turns the phrase above into concrete actions
        callback.pending();
    });
};
