const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
let translator

suite('Unit Tests', () => {

  translator = new Translator

  suite('Translating to British English', () => {

    test("Translate Mangoes are my favorite fruit. to British English", () => {
      assert.equal(true, false)
    })

    test("Translate I ate yogurt for breakfast. to British English", () => {
      assert.equal(true, false)
    })

    test("Translate We had a party at my friend's condo. to British English", () => {
      assert.equal(true, false)
    })

    test("Translate Can you toss this in the trashcan for me? to British English", () => {
      assert.equal(true, false)
    })

    test("Translate The parking lot was full. to British English", () => {
      assert.equal(true, false)
    })

    test("Translate Like a high tech Rube Goldberg machine. to British English", () => {
      assert.equal(true, false)
    })

    test("Translate To play hooky means to skip class or work. to British English", () => {
      assert.equal(true, false)
    })

    test("Translate No Mr. Bond, I expect you to die. to British English", () => {
      assert.equal(true, false)
    })

    test("Translate Dr. Grosh will see you now. to British English", () => {
      assert.equal(true, false)
    })

    test("Translate Lunch is at 12:15 today. to British English", () => {
      assert.equal(true, false)
    })

  })

  suite('Translating to American English', () => {

    test("Translate We watched the footie match for a while. to American English", () => {
      assert.equal(true, false)
    })

    test("Translate Paracetamol takes up to an hour to work. to American English", () => {
      assert.equal(true, false)
    })

    test("Translate First, caramelise the onions. to American English", () => {
      assert.equal(true, false)
    })

    test("Translate I spent the bank holiday at the funfair. to American English", () => {
      assert.equal(true, false)
    })

    test("Translate I had a bicky then went to the chippy. to American English", () => {
      assert.equal(true, false)
    })

    test("Translate I've just got bits and bobs in my bum bag. to American English", () => {
      assert.equal(true, false)
    })

    test("Translate The car boot sale at Boxted Airfield was called off. to American English", () => {
      assert.equal(true, false)
    })

    test("Translate Have you met Mrs Kalyani? to American English", () => {
      assert.equal(true, false)
    })

    test("Translate Prof Joyner of King's College, London. to American English", () => {
      assert.equal(true, false)
    })

    test("Translate Tea time is usually around 4 or 4.30. to American English", () => {
      assert.equal(true, false)
    })

  })

  suite('Highlighting Translated Words', () => {

    test("Highlight translation in Mangoes are my favorite fruit.", () => {
      assert.equal(true, false)
    })

    test("Highlight translation in I ate yogurt for breakfast.", () => {
      assert.equal(true, false)
    })

    test("Highlight translation in We watched the footie match for a while.", () => {
      assert.equal(true, false)
    })

    test("Highlight translation in Paracetamol takes up to an hour to work.", () => {
      assert.equal(true, false)
    })
    
  })

});
