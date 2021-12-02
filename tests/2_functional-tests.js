const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = process.env.LIVE_URL || require('../app.js');

chai.use(chaiHttp);

let Translator = require('../components/translator.js');

suite('Functional Tests', () => {

});
