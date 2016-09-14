/* Utility Classes */
import Router from './router';
import * as Pseudo from './utilities/pseudo.util';
import * as Text from './utilities/text.util';
import * as Time from './utilities/dateTime.util';
import Window from './utilities/window.util'

/* Page Objects */
import BasePage from './pageObjects/base.page';
import ABTestingPage from './pageObjects/aBTest.page';
import BrokenImagesPage from './pageObjects/brokenImages.page';
import DropdownPage from './pageObjects/dropdown.page';
import DynamicControlsPage from './pageObjects/dynamicControls.page';
import DynamicLoadingPage from './pageObjects/dynamicLoading.page';
import HomePage from './pageObjects/home.page';

/* UiMaps */
import BaseUiMap from './uiMaps/base.uiMap';
import ABTestingUiMap from './uiMaps/aBTest.uiMap';
import BrokenImagesUiMap from './uiMaps/brokenImages.uiMap';
import DropdownUiMap from './uiMaps/dropdown.uiMap';
import DynamicControlsUiMap from './uiMaps/dynamicControls.uiMap';
import DynamicLoadingUiMap from './uiMaps/dynamicLoading.uiMap';
import HomeUiMap from './uiMaps/home.uiMap';

export default {
    /* Utility Classes */
    Router,
    Pseudo,
    Text,
    Time,
    Window,

    /* Page Objects */
    BasePage,
    ABTestingPage,
    BrokenImagesPage,
    DropdownPage,
    DynamicControlsPage,
    DynamicLoadingPage,
    HomePage,

    /* UiMaps*/
    BaseUiMap,
    ABTestingUiMap,
    BrokenImagesUiMap,
    DropdownUiMap,
    DynamicControlsUiMap,
    DynamicLoadingUiMap,
    HomeUiMap
}
