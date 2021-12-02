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
        text: 'Here is some text to translate',
        locale: 'british-to-american'
      }
      chai.request(server)
        .post('/api/translate')
        .type('json')
        .send(inputObject)
        .end( (err, res) => {
          assert.equal(true, false)
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
          assert.equal(res.body.error, 'Required field(s) missing', 'returned error should contain a helpful message')
          done()
        })
    })
    test('Translation with missing text field: POST request to /api/translate', (done) => {
      let inputObject = {
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
        text: 'Here is some text to translate',
        locale: 'british-to-american'
      }
      chai.request(server)
        .post('/api/translate')
        .type('json')
        .send(inputObject)
        .end( (err, res) => {
          assert.equal(true, false)
          done()
        })
    })

  })

});
