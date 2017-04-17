import BasePage from '../00_base/base.page';
import ABTestUiMap from '../01_ab_testing/aBTest.uiMap';

let _elements;

export default class Basic_Auth_Page extends BasePage {

    /* Default Functions */

    constructor() {
        super();
        _elements = new Basic_Auth_UiMap();
    }

    getPageUrl() {
        return _elements.url;
    }

    pageLoadIndicator() {
        return _elements.heading;
    }

    findElement(target) {
        switch (target) {
            // case 'A/B Testing' :
            //     return _elements.aABTesting;
            default: throw Error(`The element ${target} is not defined in home.page.js`);
        }
    };

}
