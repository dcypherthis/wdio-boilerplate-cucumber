import UiMap from "./base.uiMap";

let _elements;

export default class BasePage {
  constructor() {
    super();
    _elements = new UiMap();
  }

  findBaseElement(target) {
    switch (target) {
      case "Fork Me On Github":
        return _elements.imgForkMeOnGithub;
      default:
        throw Error(`The Element ${target} is not defined in base.page.js`);
    }
  }

  /**
     * Waits for a selector to be visible and then clicks on it
     * @param {String} action - The action being performed
     * @returns {void}
     */
  waitAndClick(action) {
    const selector = this.findElement(action);
    browser.waitForVisible(selector, this.findTimeout(action));
    browser.click(selector);
  }

  checkVisibility(target) {
    return browser.isVisible(this.findElement(target));
  }

  hoverOver(action) {
    const selector = this.findElement(action);
    browser.waitForVisible(selector);
    browser.moveToObject(selector);
  }

  isOnPage(skipWait) {
    const selector = this.pageLoadIndicator();
    if (!skipWait) {
      browser.waitForVisible(selector);
    }
    return browser.isVisible(selector);
  }

  navigate() {
    browser.url(this.getPageUrl());
  }

  findTimeout(action) {
    switch (action) {
      default:
        return 10000;
    }
  }

  elementIsOnPage(element) {
    const selector = this.findElement(element);
    browser.waitUntil(
      () => {
        return browser.elements(selector) ? true : false;
      },
      10000,
      `Expected element, ${element}, to be on the page`
    );
    return true;
  }

  getStyleAttribute(element, property) {
    return browser.getCssProperty(this.findElement(element), property).parsed
      .string;
  }

  /**
     * Get the current title from Selenium and compare it to the title in the uiMap.  Waits until they both are the
     * same before returning a boolean, otherwise it throws a timeout exception.
     * @returns {bool} Returns true if the page title is correct
     */
  validatePageTitle() {
    const pageTitle = this.getPageTitle();
    let currentTitle = browser.getTitle();
    return browser.waitUntil(
      () => {
        currentTitle = browser.getTitle();
        return currentTitle === pageTitle;
      },
      10000,
      `The current page title, ${currentTitle} does not match ${pageTitle}`,
      250
    );
  }
}
