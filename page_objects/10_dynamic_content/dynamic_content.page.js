import BasePage from '../00_base/base.page';
import DynamicControlsUiMap from './dynamic_content.uiMap';

let _elements;

export default class DynamicControlsPage extends BasePage {

    /* Default Functions */

    constructor() {
        super();
        _elements = new DynamicControlsUiMap();
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
