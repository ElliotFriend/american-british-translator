const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
let translator

suite('Unit Tests', () => {

  translator = new Translator

  suite('Translating to British English', () => {

    test("Translate Mangoes are my favorite fruit. to British English", () => {
      const textString = 'Mangoes are my favorite fruit.'
      const localeString = 'american-to-british'
      const expectedString = 'Mangoes are my <span class="highlight">favourite</span> fruit.'
      let translation = translator.translate(textString, localeString)
      assert.equal(expectedString, translation)
    })

    test("Translate I ate yogurt for breakfast. to British English", () => {
      const textString = 'I ate yogurt for breakfast.'
      const localeString = 'american-to-british'
      const expectedString = 'I ate <span class="highlight">yoghurt</span> for breakfast.'
      let translation = translator.translate(textString, localeString)
      assert.equal(expectedString, translation)
    })

    test("Translate We had a party at my friend's condo. to British English", () => {
      const textString = 'We had a party at my friend\'s condo.'
      const localeString = 'american-to-british'
      const expectedString = 'We had a party at my friend\'s <span class="highlight">flat</span>.'
      let translation = translator.translate(textString, localeString)
      assert.equal(expectedString, translation)
    })

    test("Translate Can you toss this in the trashcan for me? to British English", () => {
      const textString = 'Can you toss this in the trashcan for me?'
      const localeString = 'american-to-british'
      const expectedString = 'Can you toss this in the <span class="highlight">bin</span> for me?'
      let translation = translator.translate(textString, localeString)
      assert.equal(expectedString, translation)
    })

    test("Translate The parking lot was full. to British English", () => {
      const textString = 'The parking lot was full.'
      const localeString = 'american-to-british'
      const expectedString = 'The <span class="highlight">car park</span> was full.'
      let translation = translator.translate(textString, localeString)
      assert.equal(expectedString, translation)
    })

    test("Translate Like a high tech Rube Goldberg machine. to British English", () => {
      const textString = 'Like a high tech Rube Goldberg machine.'
      const localeString = 'american-to-british'
      const expectedString = 'Like a high tech <span class="highlight">Heath Robinson device</span>.'
      let translation = translator.translate(textString, localeString)
      assert.equal(expectedString, translation)
    })

    test("Translate To play hooky means to skip class or work. to British English", () => {
      const textString = 'To play hooky means to skip class or work.'
      const localeString = 'american-to-british'
      const expectedString = 'To <span class="highlight">bunk off</span> means to skip class or work.'
      let translation = translator.translate(textString, localeString)
      assert.equal(expectedString, translation)
    })

    test("Translate No Mr. Bond, I expect you to die. to British English", () => {
      const textString = 'No Mr. Bond, I expect you to die.'
      const localeString = 'american-to-british'
      const expectedString = 'No <span class="highlight">Mr</span> Bond, I expect you to die.'
      let translation = translator.translate(textString, localeString)
      assert.equal(expectedString, translation)
    })

    test("Translate Dr. Grosh will see you now. to British English", () => {
      const textString = 'Dr. Grosh will see you now.'
      const localeString = 'american-to-british'
      const expectedString = '<span class="highlight">Dr</span> Grosh will see you now.'
      let translation = translator.translate(textString, localeString)
      assert.equal(expectedString, translation)
    })

    test("Translate Lunch is at 12:15 today. to British English", () => {
      const textString = 'Lunch is at 12:15 today.'
      const localeString = 'american-to-british'
      const expectedString = 'Lunch is at <span class="highlight">12.15</span> today.'
      let translation = translator.translate(textString, localeString)
      assert.equal(expectedString, translation)
    })

  })

  suite('Translating to American English', () => {

    test("Translate We watched the footie match for a while. to American English", () => {
      const textString = 'We watched the footie match for a while.'
      const localeString = 'british-to-american'
      const expectedString = 'We watched the <span class="highlight">soccer</span> match for a while.'
      let translation = translator.translate(textString, localeString)
      assert.equal(expectedString, translation)
    })

    test("Translate Paracetamol takes up to an hour to work. to American English", () => {
      const textString = 'Paracetamol takes up to an hour to work.'
      const localeString = 'british-to-american'
      const expectedString = '<span class="highlight">Tylenol</span> takes up to an hour to work.'
      let translation = translator.translate(textString, localeString)
      assert.equal(expectedString, translation)
    })

    test("Translate First, caramelise the onions. to American English", () => {
      const textString = 'First, caramelise the onions.'
      const localeString = 'british-to-american'
      const expectedString = 'First, <span class="highlight">caramelize</span> the onions.'
      let translation = translator.translate(textString, localeString)
      assert.equal(expectedString, translation)
    })

    test("Translate I spent the bank holiday at the funfair. to American English", () => {
      const textString = 'I spent the bank holiday at the funfair.'
      const localeString = 'british-to-american'
      const expectedString = 'I spent the <span class="highlight">public holiday</span> at the <span class="highlight">carnival</span>.'
      let translation = translator.translate(textString, localeString)
      assert.equal(expectedString, translation)
    })

    test("Translate I had a bicky then went to the chippy. to American English", () => {
      const textString = 'I had a bicky then went to the chippy.'
      const localeString = 'british-to-american'
      const expectedString = 'I had a <span class="highlight">cookie</span> then went to the <span class="highlight">fish-and-chip shop</span>.'
      let translation = translator.translate(textString, localeString)
      assert.equal(expectedString, translation)
    })

    test("Translate I've just got bits and bobs in my bum bag. to American English", () => {
      const textString = 'I\'ve just got bits and bobs in my bum bag.'
      const localeString = 'british-to-american'
      const expectedString = 'I\'ve just got <span class="highlight">odds and ends</span> in my <span class="highlight">fanny pack</span>.'
      let translation = translator.translate(textString, localeString)
      assert.equal(expectedString, translation)
    })

    test("Translate The car boot sale at Boxted Airfield was called off. to American English", () => {
      const textString = 'The car boot sale at Boxted Airfield was called off.'
      const localeString = 'british-to-american'
      const expectedString = 'The <span class="highlight">swap meet</span> at Boxted Airfield was called off.'
      let translation = translator.translate(textString, localeString)
      assert.equal(expectedString, translation)
    })

    test("Translate Have you met Mrs Kalyani? to American English", () => {
      const textString = 'Have you met Mrs Kalyani?'
      const localeString = 'british-to-american'
      const expectedString = 'Have you met <span class="highlight">Mrs.</span> Kalyani?'
      let translation = translator.translate(textString, localeString)
      assert.equal(expectedString, translation)
    })

    test("Translate Prof Joyner of King's College, London. to American English", () => {
      const textString = 'Prof Joyner of King\'s College, London.'
      const localeString = 'british-to-american'
      const expectedString = '<span class="highlight">Prof.</span> Joyner of King\'s College, London.'
      let translation = translator.translate(textString, localeString)
      assert.equal(expectedString, translation)
    })

    test("Translate Tea time is usually around 4 or 4.30. to American English", () => {
      const textString = 'Tea time is usually around 4 or 4.30.'
      const localeString = 'british-to-american'
      const expectedString = 'Tea time is usually around 4 or <span class="highlight">4:30</span>.'
      let translation = translator.translate(textString, localeString)
      assert.equal(expectedString, translation)
    })

  })

  suite('Highlighting Translated Words', () => {

    test("Highlight translation in Mangoes are my favorite fruit.", () => {
      const textString = 'Mangoes are my favorite fruit.'
      const localeString = 'american-to-british'
      let translation = translator.translate(textString, localeString)
      assert.include(translation, '<span class="highlight">')
      assert.include(translation, 'favourite')
      assert.include(translation, '</span>')
    })

    test("Highlight translation in I ate yogurt for breakfast.", () => {
      const textString = 'I ate yogurt for breakfast.'
      const localeString = 'american-to-british'
      let translation = translator.translate(textString, localeString)
      assert.include(translation, '<span class="highlight">')
      assert.include(translation, 'yoghurt')
      assert.include(translation, '</span>')
    })

    test("Highlight translation in We watched the footie match for a while.", () => {
      const textString = 'We watched the footie match for a while.'
      const localeString = 'british-to-american'
      let translation = translator.translate(textString, localeString)
      assert.include(translation, '<span class="highlight">')
      assert.include(translation, 'soccer')
      assert.include(translation, '</span>')
    })

    test("Highlight translation in Paracetamol takes up to an hour to work.", () => {
      const textString = 'Paracetamol takes up to an hour to work.'
      const localeString = 'british-to-american'
      let translation = translator.translate(textString, localeString)
      assert.include(translation, '<span class="highlight">')
      assert.include(translation, 'Tylenol')
      assert.include(translation, '</span>')
    })

  })

});
