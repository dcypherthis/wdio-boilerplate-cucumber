import BasePage from './base.page';
import DynamicLoadingUiMap from '../uiMaps/dynamicLoading.uiMap';

let _elements;

export default class DynamicLoadingPage extends BasePage {

    /* Default Functions */

    constructor() {
        super();
        _elements = new DynamicLoadingUiMap();
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
