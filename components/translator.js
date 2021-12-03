const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator {

  constructor() {
    this.getTextArray.bind(this)
  }

  getTextArray(textString) {
    return textString.split(' ')
  }

  getStartingLocale(localeString) {
    const re = /^(american|british)\-to\-\w+$/
    return localeString.match(re)[1]
  }

  needsTranslation(textArray) {
    let translationBool = false
    for (let w of textArray) {
      if (americanToBritishSpelling[w]
          || americanToBritishTitles[w]
          || americanOnly[w]
          || britishOnly[w]) {
        console.log('hit')
        translationBool = true
      }
    }
    return translationBool
  }

}

module.exports = Translator;
