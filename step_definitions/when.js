/*
 * When Steps
 */

"use strict";

import container from "./container";
let _page, _route;
const path = require("path");

module.exports = function() {
  /**
     * Determine the current page context and click on an element on that page
     *
     *  @param {String} action
     *      A Regex value that describes which selector to find and click on
     *  @type {regex}
     *  @returns {void}
     *
     */
  this.When(/^I click (the )?"([^"]*)"$/, { retry: 3 }, (the, action) => {
    _route = new container.Router();
    _page = _route.getContext();
    _page.waitAndClick(action);
  });

  /**
     * Select an option in a select box
     *
     * @param {String} option
     *     value to select in the select box
     * @param {arg} article
     *     optional/filler text
     * @param {String} target
     *      The select box the option is in
     * @returns {void}
     */
  this.When(
    /^I select "([^"]*)" from (the )"([^"]*)" select box$/,
    (option, article, target) => {
      _route = new container.Router();
      _page = _route.getContext();
      _page.select(target, option);
    }
  );

  /**
     *  Enter text into a particular input
     *
     *  @param {arg} article
     *      optional/filler text
     *  @param {String} value
     *      value to compare property against
     *  @param {String} target
     *      The element
     *  @return {void}
     **/
  this.When(
    /^I enter (a )?"([^"]*)" for the "([^"]*)" input$/,
    (article, value, target) => {
      _route = new container.Router();
      _page = _route.getContext();
      _page.enterInput(target, value);
    }
  );

  /**
     * Waits for an element to be visible and hovers over it
     *
     *  @param {String}  action
     *      A Regex value that describes which selector to find and interact with
     *  @param {arg} the
     *      optional/filler text
     *  @type {regex}
     *  @returns {void}
     *
     */
  this.When(/^I hover over (the )?"([^"]*)"$/, (the, action) => {
    _route = new container.Router();
    _page = _route.getContext();
    _page.hoverOver(action);
  });

  /**
     * Uploads a file on the current page
     *
     * @param {String} file - the name/identifier of the file
     * @type {regex}
     * @returns {void}
     */
  this.When(
    /^I upload (a )?(an )?(the )?"([^"]*)" file$/,
    (article1, article2, article3, file) => {
      _route = new container.Router();
      _page = _route.getContext();
      // _page.upload(file);
    }
  );

  /**
     * Explicitly run a pause
     * Should only be used as a last resort
     *
     * @param {int} time
     *     time in ms to make the browser wait
     * @returns {void}
     */
  this.When(/^I wait a moment (\d*)$/, time => {
    if (time) {
      browser.pause(time);
    } else {
      browser.pause(100);
    }
  });
};
