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
        let translationString = ''
        let textArray = translator.getTextArray(textString)
        let startingLocale = translator.getStartingLocale(locale)
        // console.log(startingLocale)
        // console.log(textArray)
        if (translator.needsTranslation(textArray)) {
          // do the translation
        } else {
          return res.json({ text: textString, translation: 'Everything looks good to me!'})
        }
        // console.log(needsTranslation)
        // console.log(needsTranslation)
        // We've passed the necessary validations. Here's where we get to work!
        return res.json({ text: textString, translation: translationString })
      }
    });
};
