let allWindows, currentWindow, secondWindow;

/**
 * A Utility class for changing browser windows
 */
export default class Window {

    /**
     * Determines if more than one window is available and then changes the window focus.
     * @returns {void}
     */
    changeWindow() {
        /**
         * Get an array of all open windows
         * @returns {array} an array of window identifiers
         */
        allWindows = browser.windowHandles().value;

        /**
         * Throw an error if the are more or less than 2 windows open.
         */
        if (browser.windowHandles().value.length < 2 && !0) {
            throw Error(`Only 1 window was detected in the current selenium session, expected 2.`);
        } else if (browser.windowHandles().value.length > 2) {
            throw Error(`3 or more windows were detected in the current selenium session, expected 2.`);
        }
        currentWindow = browser.windowHandle().value;
        secondWindow = allWindows[1];
        /**
         * Change the window focus to another window
         */
        if (currentWindow !== secondWindow) {
            browser.window(secondWindow);
        }
    }

    /**
     * Resets the window focus back to the original window
     * @returns {void}
     */
    setFocus(){
        browser.window(allWindows[0]);
    }

    /**
     * All currently open windows
     * @returns {array} An array of window id's
     */
    get allWindows() {
        return allWindows;
    }

    /**
     * The currently focused window
     * @returns {string} A unique window id
     */
    get currentWindow() {
        return currentWindow;
    }

    /**
     * The secondary window, not currently focused
     * @returns {string} A unique window id
     */
    get secondWindow() {
        return secondWindow;
    }
}
