const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

const reverseDictionary = (obj) =>
    Object.assign({}, ...Object.entries(obj).map(([k, v]) => ({[v]: k})));

const capitalizeFirstLetter = (str) => str.charAt(0).toUpperCase() + str.slice(1);

const searchTitlesToTranslateOnText = (text, titlesDictionary) => Object.entries(titlesDictionary).filter(([a]) => text.split(' ').includes(a));

const searchWordsWithSpacesToTranslateOnText = (text, dictionary) => {
    const wordsWithSpaces = Object.entries(dictionary).filter(([a]) => a.includes(" "));
    return wordsWithSpaces.filter(([a]) => text.toLowerCase().includes(a));
};

const searchWordsToTranslateOnText = (text, dictionary) => Object.entries(dictionary).filter(([a]) => text.toLowerCase().split(' ').includes(a));

const replaceWithWordsFromArray = (array, text) => {
    array.forEach((word) => {
        word.forEach(([american, british]) => {
            const highlightTranslated = `<span class=\"highlight\">${british}</span>`;
            text = text.replace(new RegExp(american, "gi"), highlightTranslated);
        })
    })
    return text;
}

class Translator {

    translate(text, locale) {
        let originalText = text;
        let dictionary;
        let titlesDictionary;
        let timeRegex;
        let timeTranslation;

        if (locale === 'american-to-british') {
            dictionary = {
                ...americanOnly,
                ...americanToBritishSpelling,
            };
            titlesDictionary = americanToBritishTitles;
            timeRegex = new RegExp(/\d{1,2}:\d{1,2}/gm);
            timeTranslation = [":", "."];

        } else if (locale === 'british-to-american') {
            dictionary = {
                ...britishOnly,
                ...reverseDictionary(americanToBritishSpelling),
            };
            titlesDictionary = reverseDictionary(americanToBritishTitles);
            timeRegex = new RegExp(/\d{1,2}\.\d{1,2}/gm);
            timeTranslation = [".", ":"];
        }

        // Save and remove last character
        const lastCharRegex = new RegExp(/[?!.]+/gm);
        let lastChar;
        if (lastCharRegex.test(originalText)) {
            lastChar = originalText.charAt(originalText.length - 1);
            originalText = originalText.slice(0, -1);
        }

        let translatedText = originalText;

        // Collect words to translate
        const textToTranslate = [
            searchTitlesToTranslateOnText(originalText, titlesDictionary),
            searchWordsWithSpacesToTranslateOnText(originalText, dictionary),
            searchWordsToTranslateOnText(originalText, dictionary)
        ].filter(e => e.length > 0);

        // Replace for translated words found
        if (textToTranslate.length > 0) {
            translatedText = replaceWithWordsFromArray(textToTranslate, translatedText);
        }

        // Translate hour format
        if (timeRegex.test(originalText)) {
            const hour = originalText.match(timeRegex)[0];
            const highlightHour = `<span class="highlight">${hour.replace(timeTranslation[0], timeTranslation[1])}</span>`;
            translatedText = originalText.replace(hour, highlightHour);
        }

        // Retrieve original text if none words found to translate
        if (translatedText === undefined && translatedText === originalText) {
            return originalText;
        }

        // Prepare translated text
        translatedText = capitalizeFirstLetter(translatedText);
        if (lastChar !== undefined) {
            translatedText = translatedText.concat(lastChar);
        }

        return translatedText;
    }

}

module.exports = Translator;