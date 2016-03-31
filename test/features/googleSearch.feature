Feature: Performing a Google Search

    As a user on the google search page
    I want to search for WebdriverIO
    Because I want to learn more about it

    Background:

        Given I am on the search page


    Scenario: Performing a search

        When I enter "webdriverIO" into the search box
        And  I click the search button
        Then I should see a list of search results
