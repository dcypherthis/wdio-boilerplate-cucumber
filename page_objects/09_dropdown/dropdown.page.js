import BasePage from '../00_base/base.page';
import DropdownUiMap from './dropdown.uiMap';

let _elements;

export default class DropdownPage extends BasePage {

    /* Default Functions */

    constructor() {
        super();
        _elements = new DropdownUiMap();
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
