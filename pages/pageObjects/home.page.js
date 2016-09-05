import BasePage from '../index'
import HomeUiMap from '../index';

let _elements;

export default class HomePage extends BasePage {

    constructor() {
        super();
        _elements = new HomeUiMap();
    }

    findElement(target) {
        switch (target) {
            default: throw Error(`The element ${target} is not defined in home.page.js`);
        }
    };

}
