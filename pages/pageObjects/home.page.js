import BasePage from '../index'
import HomeUiMap from '../uiMaps/home.uiMap';

export default class HomePage extends BasePage {

    findElement(target) {
        switch(target) {
            default: throw Error(`The element ${target} is not defined in home.page.js`);
        }
    };


}
