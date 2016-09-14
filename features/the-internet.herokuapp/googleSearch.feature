Feature: Navigating to all the pages::

    As a visitor to the home page
    I want explore all the different links I see
    so I can teach myself how to handle these things with selenium

    Background: Start on the home page

        Given I am on the "home" page

    Scenario: Navigating to /abtest

        When I click "A/B Testing"
        Then I should be on the "A/B Testing" page

    Scenario: Navigating to /broken_images

        When I click "Broken Images"
        Then I should be on the "Broken Images" page

    Scenario: Navigating to /dropdown

        When I click "Dropdown"
        Then I should be on the "Dropdown" page

    Scenario: Navigating to /dynamic_controls

        When I click "Dynamic Controls"
        Then I should be on the "Dynamic Controls" page

    Scenario: Navigating to /dynamic_loading

        When I click "Dynamic Loading"
        Then I should be on the "Dynamic loading" page
