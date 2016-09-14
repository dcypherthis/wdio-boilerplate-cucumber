export default class UiMap {

    // get elementName() {
    //     return 'selector'
    // }

    get url() {
        return 'https://the-internet.herokuapp.com/';
    }

    get title() {
        return 'head > title';
    }

    /* Header */
    get heading() {
        return '#content > h1';
    }

    get subHeading() {
        return '#content > h2';
    }

    /* Main Links */
    get aABTesting() {
        return '#content > ul > li:nth-child(1) > a';
    }

    get aBrokenImages() {
        return '#content > ul > li:nth-child(3) > a';
    }

    get aDropdown() {
        return '#content > ul > li:nth-child(1) > a';
    }

    get aDynamicControls() {
        return '#content > ul > li:nth-child(1) > a';
    }

    get aDynamicLoading() {
        return '#content > ul > li:nth-child(1) > a';
    }

    /* External Links */
    get imgForkMeOnGithub() {
        return 'body > div:nth-child(2) > a > img'
    }

}
