export default class BrokenImagesUiMap {

    // get elementName() {
    //     return 'selector'
    // }

    get url() {
        return 'https://the-internet.herokuapp.com/broken_images';
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
