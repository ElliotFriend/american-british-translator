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
      } else {
        return res.json({ success: 'something happened' })
      }
    });
};
