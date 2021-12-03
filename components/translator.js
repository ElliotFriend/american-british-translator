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

  needsTranslation(textString) {
    let translationBool = false
    for (let w of this.getTextArray(textString)) {
      if (americanToBritishSpelling[w] || americanToBritishTitles[w]) {
        translationBool = true
      }
    }
    for (let [k, v] of Object.entries(americanOnly)) {
      if (textString.includes(k)) translationBool = true
    }
    for (let [k, v] of Object.entries(britishOnly)) {
      if (textString.includes(v)) translationBool = true
    }
    return translationBool
  }

  translateSpelling(textWord, startingLocale) {
    let returnWord = textWord
    switch (startingLocale) {
      case 'american':
        if (americanToBritishTitles[textWord]) {
          returnWord = `<span class="highlight">${americanToBritishTitles[textWord]}</span>`
        } else if (americanToBritishSpelling[textWord]) {
          returnWord = `<span class="highlight">${americanToBritishSpelling[textWord]}</span>`
        }
        break
      case 'british':
        for (let [k, v] of Object.entries(americanToBritishTitles)) {
          if (v === textWord) returnWord = `<span class="highlight">${v}</span>`
        }
        for (let [k, v] of Object.entries(americanToBritishSpelling)) {
          if (v === textWord) returnWord = `<span class="highlight">${v}</span>`
        }
        break
        // break
      default:
        break
    }
    return returnWord
  }

  translatePhrase(textString, startingLocale) {
    let returnString = textString
    switch(startingLocale) {
      case 'american':
        break
      case 'british':
        for (let [k, v] of Object.entries(britishOnly)) {
          if (textString.includes(k)) {
            console.log('yes here')
            let re = new RegExp(k, 'g')
            returnString = returnString.replace(re, `<span class="highlight">${v}</span>`)
            break
          }
        }
        break
      default:
        break
    }
    return returnString
  }

  translateAll(textString, startingLocale) {
    let returnString = textString
    // switch(startingLocale) {
    //   case 'american':
    //     break
    //   case 'british':
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
        // break
      // default:
      //   break
    // }
    return returnString
  }

}

module.exports = Translator;
