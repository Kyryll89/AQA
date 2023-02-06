const { Element } = require("../utils/Element.js");
const pageName = 'Thank You Page';

class ThankYouPage {

    thankYouMessage = new Element('Thank you message', pageName, "//td/h1");
    orderIdSelector = new Element('Order id selector', pageName, "//td/label[not(contains(text(), 'History'))]");
    
}
module.exports = {ThankYouPage};