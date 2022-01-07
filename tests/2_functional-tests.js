const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server.js');

chai.use(chaiHttp);

let Translator = require('../components/translator.js');

suite('Functional Tests', () => {
    test('Translation with text and locale fields: POST request to /api/translate', function (done) {
        const body = {text: '', locale: 'american-to-british'};
        chai.request(server)
            .post('/api/translate')
            .send(body)
            .end(function (err, res) {
                assert.deepEqual(res.body, '');
                done();
            });
    });

    test('Translation with text and invalid locale field: POST request to /api/translate', function (done) {
        const body = {text: '', locale: 'americanbritish'};
        chai.request(server)
            .post('/api/translate')
            .send(body)
            .end(function (err, res) {
                assert.deepEqual(res.body, '');
                done();
            });
    });

    test('Translation with missing text field: POST request to /api/translate', function (done) {
        const body = {locale: 'american-to-british'};
        chai.request(server)
            .post('/api/translate')
            .send(body)
            .end(function (err, res) {
                assert.deepEqual(res.body, '');
                done();
            });
    });

    test('Translation with missing locale field: POST request to /api/translate', function (done) {
        const body = {text: ''};
        chai.request(server)
            .post('/api/translate')
            .send(body)
            .end(function (err, res) {
                assert.deepEqual(res.body, '');
                done();
            });
    });

    test('Translation with empty text: POST request to /api/translate', function (done) {
        const body = {text: '', locale: 'american-to-british'};
        chai.request(server)
            .post('/api/translate')
            .send(body)
            .end(function (err, res) {
                assert.deepEqual(res.body, '');
                done();
            });
    });

    test('Translation with text that needs no translation: POST request to /api/translate', function (done) {
        const body = {text: '', locale: 'american-to-british'};
        chai.request(server)
            .post('/api/translate')
            .send(body)
            .end(function (err, res) {
                assert.deepEqual(res.body, '');
                done();
            });
    });
});