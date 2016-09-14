/* Utility Classes */
import Router from './router';
import * as Pseudo from './utilities/pseudo.util';
import * as Text from './utilities/text.util';
import * as Time from './utilities/dateTime.util';
import Window from './utilities/window.util'

/* Page Objects */
import BasePage from './pageObjects/base.page';
import HomePage from './pageObjects/home.page';

/* UiMaps */
import BaseUiMap from './uiMaps/base.uiMap';
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
    HomePage,

    /* UiMaps*/
    BaseUiMap,
    HomeUiMap
}
