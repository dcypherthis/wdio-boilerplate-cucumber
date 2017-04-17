/*
 * Then Steps
 */

"use strict";

import container from "./container";
let _page, _route;
const path = require("path");

module.exports = function() {
  /**
     *  Asserting that you are on the currently instantiated page where target is passed from a cucumber regex
     *  and is used to lookup the corresponding page object.
     *
     *  @param {String} target
     *      The desired page
     *  @type {regex}
     *  @return {void}
     *
     **/
  this.Then(/^I should be on the "([^"]*)" page$/, target => {
    _route = new container.Router();
    _page = _route.setContext(target);
    expect(
      _page.isOnPage(),
      `Should be on the ${target} page, but was unable to verify`
    ).to.be.true;
  });

  /**
     *  Asserting that an element is or is not visible, where target is passed
     *  from a cucumber regex and is used to instantiate the corresponding page object.
     *
     *  @param {String} target
     *      The desired page
     *  @param {arg} not
     *      The reverse of the statement
     *  @param {arg} the
     *      optional/filler text
     *  @param {arg} a
     *      optional/filler text
     *  @type {regex}
     *  @return {void}
     *
     **/
  this.Then(
    /^I should (not )?see (the )?(a )?"([^"]*)"$/,
    (not, article1, article2, target) => {
      _route = new container.Router();
      _page = _route.getContext();
      if (not) {
        browser.waitUntil(
          () => {
            return _page.checkVisibility(target) === false;
          },
          10000,
          `Expected ${target} to be invisible in less than 10 seconds`
        );
      } else {
        browser.waitUntil(
          () => {
            return _page.checkVisibility(target);
          },
          10000,
          `Expected ${target} to be visible in less than 10 seconds`
        );
      }
    }
  );

  /**
     *  Asserting that an element has a particular property in it's style
     *
     *  @param {String} property
     *      The property to check
     *  @param {arg} the
     *      optional/filler text
     *  @param {String} target
     *      The element
     *  @param {arg} quantifier
     *      optional text for comparison logic
     *  @param {String} value
     *      value to compare property against
     *  @type {regex}
     *  @return {void}
     *
     **/
  this.Then(
    /^The "([^"]*)" of (the )?"([^"]*)" should be (less than |greater than |equal to )?"([^"]*)"/,
    (property, the, target, quantifier, value) => {
      _route = new container.Router();
      _page = _route.getContext();
      expect(
        _page.elementIsOnPage(target),
        `Element ${target} should be on the page, but was unable to verify`
      ).to.be.true;
      switch (quantifier) {
        case "greater than ":
          browser.waitUntil(
            () => {
              return (
                _page.getStyleAttribute(target, property).localeCompare(value) >
                0
              );
            },
            10000,
            `Expected ${target}'s ${property}, ${_page.getStyleAttribute(target, property)} to be greater than value, ${value}`
          );
          break;
        case "less than ":
          browser.waitUntil(
            () => {
              return (
                _page.getStyleAttribute(target, property).localeCompare(value) <
                0
              );
            },
            10000,
            `Expected ${target}'s ${property}, ${_page.getStyleAttribute(target, property)} to be less than value, ${value}`
          );
          break;
        default:
          browser.waitUntil(
            () => {
              return (
                _page
                  .getStyleAttribute(target, property)
                  .localeCompare(value) === 0
              );
            },
            10000,
            `Expected ${target}'s ${property}, ${_page.getStyleAttribute(target, property)} to be equal to value, ${value}`
          );
      }
    }
  );

  /**
     *  Asserting that an element has specific text
     *
     *  @param {arg} article
     *      optional/filler text
     *  @param {String} target
     *      The element
     *  @param {String} value
     *      value to compare property against
     *  @return {void}
     **/
  this.Then(
    /^The text of (the )?"([^"]*)" should be (the )?"([^"]*)"/,
    (article, target, article2, value) => {
      _route = new container.Router();
      _page = _route.getContext();
      expect(
        _page.elementIsOnPage(target),
        `Element ${target} should be on the page, but was unable to verify`
      ).to.be.true;
      expect(
        _page.assertText(target, value),
        `Expected ${target}'s text to be ${value}`
      ).to.be.true;
    }
  );

  /**
     *  Asserting that an element has some property
     *
     *  @param {String} target
     *      The element
     *  @param {String} value
     *      value to compare property against
     *  @return {void}
     **/
  this.Then(/^The "([^"]*)" is "([^"]*)"/, (target, value) => {
    _route = new container.Router();
    _page = _route.getContext();
    expect(
      _page.elementIsOnPage(target),
      `Element ${target} should be on the page, but was unable to verify`
    ).to.be.true;
    expect(
      _page.assertProperty(target, value),
      `Expected ${target}'s text to be ${value}`
    ).to.be.true;
  });
};
