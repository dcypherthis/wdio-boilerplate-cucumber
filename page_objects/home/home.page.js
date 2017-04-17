import Base_Page from "../00_base/base.page";
import UiMap from "./home.uiMap";

let _elements;

export default class HomePage extends Base_Page {
  /* Default Functions */

  constructor() {
    super();
    _elements = new UiMap();
  }

  getPageUrl() {
    return _elements.url;
  }

  pageLoadIndicator() {
    return _elements.heading;
  }

  findElement(target) {
    switch (target) {
      case "A/B Testing":
        return _elements.aABTesting;
      case "Broken Images":
        return _elements.aBrokenImages;
      case "Dropdown":
        return _elements.aDropdown;
      case "Dynamic Controls":
        return _elements.aDynamicControls;
      case "Dynamic Loading":
        return _elements.aDynamicLoading;
      default:
        throw Error(`The element ${target} is not defined in home.page.js`);
    }
  }
}
