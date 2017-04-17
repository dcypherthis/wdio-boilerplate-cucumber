import pages from './index';
let page, currentUrl;

/**
 * A Router class that handles context driven decisions for the test suite.
 */
export default class Router {

    /**
     * Uses if/else logic with regular expressions to determine the current page base on matching parts of the current
     * url. A matching condition instantiates the corresponding page and returns a page object.
     *
     * @returns {Object} A page object
     * @alias router.getContext
     */
    getContext() {
        currentUrl = browser.getUrl();
        if (currentUrl.match(/https?:\/\/the-internet.*\.herokuapp.com\//)) {
            page = new pages.HomePage();
        } else if (currentUrl.match(/palindrome/)) {
            page = new pages.PalindromePage();
        } else if (currentUrl.match(/abtest/)) {
            page = new pages.ABTestingPage();
        } else if (currentUrl.match(/broken_images/)) {
            page = new pages.BrokenImagesPage();
        } else if (currentUrl.match(/dropdown/)) {
            page = new pages.DropdownPage();
        } else if (currentUrl.match(/dynamic_controls/)) {
            page = new pages.DynamicControlsPage();
        } else if (currentUrl.match(/dynamic_loading\/?/)) {
            page = new pages.DynamicLoadingPage();
        } else {
            throw Error(`The url ${currentUrl} does not match any pages defined in the router.js file`, console.trace()); // eslint-disable-line no-console
        }
        return page;
    }

    /**
     * Returns a new page matching the targetPage
     *
     * @param {String} targetPage   The intended page
     * @returns {Object} A page object that matches targetPage.
     * @alias router.setContext
     */
    setContext(targetPage) {
        this.page = page;
        switch (targetPage) {
            case 'palindrome':
                page = new pages.PalindromePage();
                break;
            case 'home':
                page = new pages.HomePage();
                break;
            case 'A/B Testing':
                page = new pages.ABTestingPage();
                break;
            case 'Broken Images':
                page = new pages.BrokenImagesPage();
                break;
            case 'Dropdown':
                page = new pages.DropdownPage();
                break;
            case 'Dynamic Controls':
                page = new pages.DynamicControlsPage();
                break;
            case 'Dynamic Loading':
                page = new pages.DynamicLoadingPage();
                break;
            default:
                throw Error(`The ${targetPage} page is not defined as a valid case in router.setContext(targetPage)`);
        }
        return page;
    }

    /**
     * Compares current url (from selenium) with destination url (from page object).  If they do not match, it sets page
     * to the the corresponding targetPage, navigates to it via url, and then returns the page object.
     *
     * <example>
     *     :step.js
     *     _page = new login_page();
     *     console.log(_page) // outputs: login_page{}
     *     _page = router.switchPage('home')
     *     console.log(_page) // outputs: home_page{}
     *</examaple>
     *
     * @param {String} targetPage   The intended page
     * @returns {Object} A page object that matches targetPage.
     * @alias router.switchPage
     */
    switchPage(targetPage) {
        const current = browser.getUrl();
        const destination = this.setContext(targetPage).getPageUrl();
        if (current !== destination) {
            page = this.setContext(targetPage);
            page.navigate();
        }
        return page;
    }
}
