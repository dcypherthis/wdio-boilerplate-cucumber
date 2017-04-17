export default class ABTestUiMap {
  // get elementName() {
  //     return 'selector'
  // }

  get url() {
    return "https://the-internet.herokuapp.com/abtest";
  }

  get title() {
    return "head > title";
  }

  /* Header */
  get heading() {
    return "NOPE";
  }

  /* External Links */
  get imgForkMeOnGithub() {
    return "body > div:nth-child(2) > a > img";
  }
}
