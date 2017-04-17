/**
 * Adds the :active psuedo class to a selector
 *
 * @param {String} baseSelector element to wait for/click on
 * @returns {String} baseSelector:active
 */
exports.makeActive = baseSelector => {
  const activeState = ":active";
  return baseSelector + activeState;
};

/**
 * Adds the :hover psuedo class to a selector
 *
 * @param {String} baseSelector element to wait for/click on
 * @returns {String} baseSelector:hover
 */
exports.makeHover = baseSelector => {
  const hoverState = ":hover";
  return baseSelector + hoverState;
};

/**
 * Adds the :focus psuedo class to a selector
 *
 * @param {String} baseSelector element to wait for/click on
 * @returns {String} baseSelector:focus
 */
exports.makeFocus = baseSelector => {
  const focusState = ":focus";
  return baseSelector + focusState;
};

/**
 * Adds the :visted psuedo class to a selector
 *
 * @param {String} baseSelector element to wait for/click on
 * @returns {String} baseSelector:visited
 */
exports.makeVisited = baseSelector => {
  const visitedState = ":visited";
  return baseSelector + visitedState;
};
