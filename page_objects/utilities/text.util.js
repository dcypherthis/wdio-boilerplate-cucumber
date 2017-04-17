const _time = require("./dateTime.util");
const currentTime = _time.getFormattedTime();

/**
 * Looks up the session data from the active Selenium session and format it into a single string
 * @returns {string} Unique session data identifier
 */
const formatSessionData = () => {
  const sessionData = browser.session("get");
  const sessionId = sessionData.sessionId;
  const browserName = sessionData.value.browserName;
  const browserVersion = sessionData.value.version;
  const platform = sessionData.value.platform;
  return `${platform} ${browserName} ${browserVersion} ${sessionId}`;
};

/**
 * A variable used to generate a unique name
 *
 * @param {String} identifier - An argument that becomes the base identifier of the name
 * @returns {String} Unique mailing name appended with time and session data
 */
const getUniqueName = identifier => {
  return `${identifier} - ${currentTime} - ${formatSessionData()}`;
};

/**
 * Calls the getSessionData() function
 * @returns {string} Unique session data identifier
 */
exports.getSessionData = () => {
  return formatSessionData();
};
