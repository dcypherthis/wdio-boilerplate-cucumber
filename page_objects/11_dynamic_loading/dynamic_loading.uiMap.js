export default class DynamicLoadingUiMap {

    // get elementName() {
    //     return 'selector'
    // }

    get url() {
        return 'https://the-internet.herokuapp.com/dynamic_loading';
    }

    get title() {
        return 'head > title';
    }

    /* Header */
    get heading() {
        return '#content > div > h3';
    }

    /* External Links */
    get imgForkMeOnGithub() {
        return 'body > div:nth-child(2) > a > img'
    }

}
