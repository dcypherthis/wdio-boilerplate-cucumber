export default class DynamicControlsUiMap {
  // get elementName() {
  //     return 'selector'
  // }

  get url() {
    return "https://the-internet.herokuapp.com/dynamic_controls";
  }

  get title() {
    return "head > title";
  }

  /* Header */
  get heading() {
    return "#content > div.example > h4";
  }

  /* External Links */
  get imgForkMeOnGithub() {
    return "body > div:nth-child(2) > a > img";
  }
}
