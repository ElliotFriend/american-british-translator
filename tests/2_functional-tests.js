const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = process.env.LIVE_URL || require('../app.js');

chai.use(chaiHttp);

// let Translator = require('../components/translator.js');

suite('Functional Tests', function() {
  this.timeout(5000)

  suite('Testing the /api/translate endpoint with valid input', () => {

    test('Translation with text and locale fields: POST request to /api/translate', (done) => {
      let inputObject = {
        text: 'I\'ve just got bits and bobs in my bum bag.',
        locale: 'british-to-american'
      }
      chai.request(server)
        .post('/api/translate')
        .type('json')
        .send(inputObject)
        .end( (err, res) => {
          assert.equal(res.status, 200, 'return status should be 200')
          assert.isObject(res.body, 'returned object should be of type object')
          assert.property(res.body, 'text', 'returned object should contain a text property')
          assert.isString(res.body.text, 'returned text property should be of type string')
          assert.equal(res.body.text, inputObject.text, 'returned text should the same text that was submitted')
          assert.property(res.body, 'translation', 'returned object should contain a translation property')
          assert.isString(res.body.translation, 'returned translation property should be of type string')
          assert.equal(res.body.translation, 'I\'ve just got <span class="highlight">odds and ends</span> in my <span class="highlight">fanny pack</span>.', 'returned translation should contain a the translation')
          done()
        })
    })

  })

  suite('Testing the /api/translate endpoint with invalid input', () => {

    test('Translation with text and invalid locale field: POST request to /api/translate', (done) => {
      let inputObject = {
        text: 'Here is some text to translate',
        locale: 'canadian-to-australian'
      }
      chai.request(server)
        .post('/api/translate')
        .type('json')
        .send(inputObject)
        .end( (err, res) => {
          assert.equal(res.status, 200, 'return status should be 200')
          assert.isObject(res.body, 'returned object should be of type object')
          assert.property(res.body, 'error', 'returned object should contain an error property')
          assert.isString(res.body.error, 'returned error property should be of type string')
          assert.equal(res.body.error, 'Invalid value for locale field', 'returned error should contain a helpful message')
          done()
        })
    })

    test('Translation with missing text field: POST request to /api/translate', (done) => {
      let inputObject = {
        locale: 'american-to-british'
      }
      chai.request(server)
        .post('/api/translate')
        .type('json')
        .send(inputObject)
        .end( (err, res) => {
          assert.equal(res.status, 200, 'return status should be 200')
          assert.isObject(res.body, 'returned object should be of type object')
          assert.property(res.body, 'error', 'returned object should contain an error property')
          assert.isString(res.body.error, 'returned error property should be of type string')
          assert.equal(res.body.error, 'Required field(s) missing', 'returned error should contain a helpful message')
          done()
        })
    })

    test('Translation with missing locale field: POST request to /api/translate', (done) => {
      let inputObject = {
        text: 'Here is some text to translate',
      }
      chai.request(server)
        .post('/api/translate')
        .type('json')
        .send(inputObject)
        .end( (err, res) => {
          assert.equal(res.status, 200, 'return status should be 200')
          assert.isObject(res.body, 'returned object should be of type object')
          assert.property(res.body, 'error', 'returned object should contain an error property')
          assert.isString(res.body.error, 'returned error property should be of type string')
          assert.equal(res.body.error, 'Required field(s) missing', 'returned error should contain a helpful message')
          done()
        })
    })

    test('Translation with empty text: POST request to /api/translate', (done) => {
      let inputObject = {
        text: '',
        locale: 'british-to-american'
      }
      chai.request(server)
        .post('/api/translate')
        .type('json')
        .send(inputObject)
        .end( (err, res) => {
          assert.equal(res.status, 200, 'return status should be 200')
          assert.isObject(res.body, 'returned object should be of type object')
          assert.property(res.body, 'error', 'returned object should contain an error property')
          assert.isString(res.body.error, 'returned error property should be of type string')
          assert.equal(res.body.error, 'No text to translate', 'returned error should contain a helpful message')
          done()
        })
    })

    test('Translation with text that needs no translation: POST request to /api/translate', (done) => {
      let inputObject = {
        text: 'Here is some text that needs no translation',
        locale: 'american-to-british'
      }
      let fccObject = {
        text: 'SaintPeter and nhcarrigan give their regards!',
        locale: 'british-to-american'
      }
      chai.request(server)
        .post('/api/translate')
        .type('json')
        .send(inputObject)
        .end( (err, res) => {
          assert.equal(res.status, 200, 'return status should be 200')
          assert.isObject(res.body, 'returned object should be of type object')
          assert.property(res.body, 'text', 'returned object should contain a text property')
          assert.isString(res.body.text, 'returned text property should be of type string')
          assert.equal(res.body.text, inputObject.text, 'returned text should the same text that was submitted')
          assert.property(res.body, 'translation', 'returned object should contain a translation property')
          assert.isString(res.body.translation, 'returned translation property should be of type string')
          assert.equal(res.body.translation, 'Everything looks good to me!', 'returned translation should contain a helpful message')
          chai.request(server)
            .post('/api/translate')
            .type('json')
            .send(fccObject)
            .end( (err, res) => {
              assert.equal(res.status, 200, 'return status should be 200')
              assert.isObject(res.body, 'returned object should be of type object')
              assert.property(res.body, 'text', 'returned object should contain a text property')
              assert.isString(res.body.text, 'returned text property should be of type string')
              assert.equal(res.body.text, fccObject.text, 'returned text should the same text that was submitted')
              assert.property(res.body, 'translation', 'returned object should contain a translation property')
              assert.isString(res.body.translation, 'returned translation property should be of type string')
              assert.equal(res.body.translation, 'Everything looks good to me!', 'returned translation should contain a helpful message')
              done()
        })
    })

  })
})
});
