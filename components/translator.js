const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator {

  constructor() {
    this.getStartingLocale.bind(this)
  }

  getStartingLocale(localeString) {
    const re = /^(american|british)\-to\-\w+$/
    return localeString.match(re)[1]
  }

  translate(textString, localeString) {
    let returnString = textString
    let startingLocale = this.getStartingLocale(localeString)

    for (let [k, v] of Object.entries(britishOnly)) {
      let og = startingLocale === 'american' ? v : k
      let tr = startingLocale === 'american' ? k : v
      if (textString.includes(og)) {
        let re = new RegExp(og, 'g')
        returnString = returnString.replace(re, `<span class="highlight">${tr}</span>`)
        // break
      }
    }
    for (let [k, v] of Object.entries(americanToBritishTitles)) {
      let og = startingLocale === 'american' ? k : v
      let tr = startingLocale === 'american' ? v : k
      if (textString.includes(og)) {
        let re = new RegExp(og, 'g')
        returnString = returnString.replace(re, `<span class="highlight">${tr}</span>`)
      }
    }
    for (let [k, v] of Object.entries(americanToBritishSpelling)) {
      let og = startingLocale === 'american' ? k : v
      let tr = startingLocale === 'american' ? v : k
      if (textString.includes(og)) {
        let re = new RegExp(og, 'g')
        returnString = returnString.replace(re, `<span class="highlight">${tr}</span>`)
      }
    }
    for (let [k, v] of Object.entries(americanOnly)) {
      let og = startingLocale === 'american' ? k : v
      let tr = startingLocale === 'american' ? v : k
      if (textString.includes(og)) {
        let re = new RegExp(og, 'g')
        returnString = returnString.replace(re, `<span class="highlight">${tr}</span>`)
      }
    }

    return returnString === textString ? 'Everything looks good to me!' : returnString
  }

}

module.exports = Translator;
