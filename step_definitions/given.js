/*
 * Given Steps
 */

"use strict";

import container from "./container";
import request from "request";
let _page, _route;
const path = require("path");

module.exports = function() {
  /**
     *  Navigating to a page by entering a URL where target is passed from a cucumber regex and is used to lookup the
     *  corresponding page object via switch statement.
     *
     *  @param {String} target
     *      The desired page
     *  @type {regex}
     *  @returns {void}
     *
     **/
  this.Given(/^I navigate to the "([^"]*)" page$/, target => {
    _route = new container.Router();
    _page = _route.setContext(target);
    _page.navigate(target);
    expect(
      _page.isOnPage(),
      `Should be on the ${target} page, but was unable to verify`
    ).to.be.true;
  });

  /**
     *  Asserting that you are on the currently instantiated page where (target) is passed from a cucumber regex
     *  and is used to lookup the corresponding page object.
     *
     *  @param {String} targetPage
     *      The desired page
     *  @type {regex}
     *  @returns {void}
     *
     **/
  this.Given(/^I am on the "([^"]*)" page$/, targetPage => {
    _route = new container.Router();
    _page = _route.switchPage(targetPage);
    expect(
      _page.isOnPage(),
      `Should be on the ${targetPage} page, but was unable to verify`
    ).to.be.true;
  });

  /**
     *  Determine the current page context and click on an element on that page.
     *
     *  @param {String} action
     *      A Regex value that describes which selector to find and interact with
     *  @type {regex}
     *  @returns {void}
     *
     **/
  this.Given(/^I have clicked (the )?"([^"]*)"$/, (the, action) => {
    _route = new container.Router();
    _page = _route.getContext();
    _page.waitAndClick(action);
  });

  /**
     *  Check to see if an element has some property, and if not, make it so
     *
     *  @param {String} target
     *      The element
     *  @param {String} value
     *      value to compare property against
     *  @return {void}
     **/
  this.Given(/^The "([^"]*)" should be "([^"]*)"/, (target, value) => {
    _route = new container.Router();
    _page = _route.getContext();
    expect(
      _page.elementIsOnPage(target),
      `Element ${target} should be on the page, but was unable to verify`
    ).to.be.true;
    if (!_page.assertProperty(target, value)) {
      _page.executeProperty(target, value);
    }
    expect(
      _page.assertProperty(target, value),
      `Expected ${target}'s text to be ${value}`
    ).to.be.true;
  });

  this.Given(
    /^I set (the )?"([^"]*)" to "([^"]*)"$/,
    (article, target, value) => {
      _route = new container.Router();
      _page = _route.getContext();
      _page.fillElement(target, value);
    }
  );
};
