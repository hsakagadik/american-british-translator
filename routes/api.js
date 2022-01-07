'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {

    const translator = new Translator();

    app.route('/api/translate')
        .post((req, res) => {
            if (req.body.text === undefined || req.body.locale === undefined) {
                res.json({error: 'Required field(s) missing'});
            } else if (req.body.locale !== 'american-to-british' && req.body.locale !== 'british-to-american') {
                res.json({error: 'Invalid value for locale field'});
            } else if (req.body.text === '') {
                res.json({error: 'No text to translate'});
            } else {
                const translated = translator.translate(req.body.text, req.body.locale);
                if (translated === req.body.text){
                    res.json({translation: "Everything looks good to me!"});
                }
                res.json({translation: translated});
            }
        });
};
