const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server.js');

chai.use(chaiHttp);

suite('Functional Tests', () => {
    test('Translation with text and locale fields: POST request to /api/translate', function (done) {
        const body = {text: 'I ate yogurt for breakfast.', locale: 'american-to-british'};
        const translationRes = {translation: 'I ate <span class="highlight">yoghurt</span> for breakfast.'};
        chai.request(server)
            .post('/api/translate')
            .send(body)
            .end(function (err, res) {
                assert.deepEqual(res.body, translationRes);
                done();
            });
    });

    test('Translation with text and invalid locale field: POST request to /api/translate', function (done) {
        const body = {text: 'Mangoes are my favorite fruit.', locale: 'americanbritish'};
        const invalidLocaleError = { error: 'Invalid value for locale field' };
        chai.request(server)
            .post('/api/translate')
            .send(body)
            .end(function (err, res) {
                assert.deepEqual(res.body, invalidLocaleError);
                done();
            });
    });

    test('Translation with missing text field: POST request to /api/translate', function (done) {
        const body = {locale: 'american-to-british'};
        const missingRequiredError = { error: 'Required field(s) missing' };
        chai.request(server)
            .post('/api/translate')
            .send(body)
            .end(function (err, res) {
                assert.deepEqual(res.body, missingRequiredError);
                done();
            });
    });

    test('Translation with missing locale field: POST request to /api/translate', function (done) {
        const body = {text: 'We watched the footie match for a while.'};
        const missingRequiredError = { error: 'Required field(s) missing' };
        chai.request(server)
            .post('/api/translate')
            .send(body)
            .end(function (err, res) {
                assert.deepEqual(res.body, missingRequiredError);
                done();
            });
    });

    test('Translation with empty text: POST request to /api/translate', function (done) {
        const body = {text: '', locale: 'american-to-british'};
        const noTextError = { error: 'No text to translate' };
        chai.request(server)
            .post('/api/translate')
            .send(body)
            .end(function (err, res) {
                assert.deepEqual(res.body, noTextError);
                done();
            });
    });

    test('Translation with text that needs no translation: POST request to /api/translate', function (done) {
        const body = {text: 'Hi no need to translate', locale: 'american-to-british'};
        const looksGoodRes = {translation: "Everything looks good to me!"}
        chai.request(server)
            .post('/api/translate')
            .send(body)
            .end(function (err, res) {
                assert.deepEqual(res.body, looksGoodRes);
                done();
            });
    });
});