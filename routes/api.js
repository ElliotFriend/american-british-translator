'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {

  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      if (req.body.text === '' ) {
        return res.json({ error: 'No text to translate' })
      } else if (!req.body.text || !req.body.locale) {
        return res.json({ error: 'Required field(s) missing' })
      } else if (!/^american\-to\-british|british\-to\-american$/.test(req.body.locale)) {
        return res.json({ error: 'Invalid value for locale field' })
      // TODO: test for text that doesn't need to be translated. Although,
      // perhaps that belongs in the translator file?
      } else {
        const textString = req.body.text
        const locale = req.body.locale
        let translationArray = []
        let textArray = translator.getTextArray(textString)
        let startingLocale = translator.getStartingLocale(locale)
        // console.log(textArray)
        // if (translator.needsTranslation(textString)) {
        //   // do the translation
        //   for (let w of textArray) {
        //     translationArray = translationArray.concat(translator.translateSpelling(w, startingLocale))
        //   }
        //   let translationString = translator.translatePhrase(translationArray.join(' '), startingLocale)
        //   return res.json({ text: textString, translation: translationString })
        // } else {
        //   return res.json({ text: textString, translation: 'Everything looks good to me!'})
        // }
        // We've passed the necessary validations. Here's where we get to work!
        let translationString = translator.translateAll(textString, startingLocale)
        return res.json({ text: textString, translation: translationString })
      }
    });
};
