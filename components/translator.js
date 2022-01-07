const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

const reverseDictonary = (obj) =>
    Object.assign({}, ...Object.entries(obj).map(([k, v]) => ({[v]: k})));

const capitalizeFirstLetter = (str) => str.charAt(0).toUpperCase() + str.slice(1);

class Translator {

    translateToAmerican(text) {
        let originalText = text;
        const britishAmericanDictonary = {
            ...britishOnly,
            ...reverseDictonary(americanToBritishSpelling),
        };
        const britishToAmericanTitles = reverseDictonary(americanToBritishTitles);
        const timeRegex = new RegExp(/\d{1,2}\.\d{1,2}/gm);

        // Save last character
        const lastCharRegex = new RegExp(/[\?\!\.]+/gm);
        let lastChar;
        if (lastCharRegex.test(originalText)) {
            lastChar = originalText.charAt(originalText.length - 1);
            originalText = originalText.slice(0, -1);
        }

        let translatedText = originalText;

        // For collect words
        const textToTranslate = [];

        // Search for titles to translate
        const translatedTitles = Object.entries(britishToAmericanTitles).filter(([a, b]) => originalText.split(' ').includes(a));
        if (translatedTitles.length > 0) {
            textToTranslate.push(translatedTitles);
        }

        // Search words with spaces to translate
        const wordsWithSpaces = Object.entries(britishAmericanDictonary).filter(([a, b]) => a.includes(" "));
        const translatedWordsWithSpaces = wordsWithSpaces.filter(([a, b]) => originalText.toLowerCase().includes(a));
        if (translatedWordsWithSpaces.length > 0) {
            textToTranslate.push(translatedWordsWithSpaces);
        }

        // Search words to translate
        const translatedDictonary = Object.entries(britishAmericanDictonary).filter(([a, b]) => originalText.toLowerCase().split(' ').includes(a));
        if (translatedDictonary.length > 0) {
            textToTranslate.push(translatedDictonary);
        }

        if (timeRegex.test(originalText)) {
            translatedText = originalText.replace('.', ':');
        }

        // Replace for translated words found
        if(textToTranslate.length > 0){
            textToTranslate.forEach((word) => {
                word.forEach(([american, british]) => {
                    const highlightTranslated = `<span class=\"highlight\">${british}</span>`;
                    translatedText = translatedText.replace(new RegExp(american, "gi"), highlightTranslated);
                })
            })
        }

        // Retrieve translated text to British with first letter in uppercase
        if(translatedText === undefined && translatedText === originalText){
            return originalText;
        }

        // Prepare translated text
        translatedText = capitalizeFirstLetter(translatedText);
        if(lastChar !== undefined){
            translatedText = translatedText.concat(lastChar);
        }

        return translatedText;
    }

    translateToBritish(text) {
        let originalText = text;
        const americanBritishDictonary = {
            ...americanOnly,
            ...americanToBritishSpelling,
        };
        const timeRegex = new RegExp(/\d{1,2}\:\d{1,2}/gm);

        // Save last character
        const lastCharRegex = new RegExp(/[\?\!\.]+/gm);
        let lastChar;
        if (lastCharRegex.test(originalText)) {
            lastChar = originalText.charAt(originalText.length - 1);
            originalText = originalText.slice(0, -1);
        }

        let translatedText = originalText;

        // For collect words
        const textToTranslate = [];

        // Search for titles to translate
        const translatedTitles = Object.entries(americanToBritishTitles).filter(([a, b]) => originalText.includes(a));
        if (translatedTitles.length > 0) {
            textToTranslate.push(translatedTitles);
        }

        // Search words with spaces to translate
        const wordsWithSpaces = Object.entries(americanBritishDictonary).filter(([a, b]) => a.includes(" "));
        const translatedWordsWithSpaces = wordsWithSpaces.filter(([a, b]) => originalText.toLowerCase().includes(a));
        if (translatedWordsWithSpaces.length > 0) {
            textToTranslate.push(translatedWordsWithSpaces);
        }

        // Search words to translate
        const translatedDictonary = Object.entries(americanBritishDictonary).filter(([a, b]) => originalText.toLowerCase().split(' ').includes(a));
        if (translatedDictonary.length > 0) {
            textToTranslate.push(translatedDictonary);
        }

        if (timeRegex.test(originalText)) {
            translatedText = originalText.replace(':', '.');
        }

        // Replace for translated words found
        if(textToTranslate.length > 0){
            textToTranslate.forEach((word) => {
                word.forEach(([american, british]) => {
                    const highlightTranslated = `<span class=\"highlight\">${british}</span>`;
                    translatedText = translatedText.replace(new RegExp(american, "gi"), highlightTranslated);
                })
            })
        }

        // Retrieve translated text to British with first letter in uppercase
        if(translatedText === undefined && translatedText === originalText){
            return originalText;
        }

        // Prepare translated text
        translatedText = capitalizeFirstLetter(translatedText);
        if(lastChar !== undefined){
            translatedText = translatedText.concat(lastChar);
        }

        return translatedText;
    }

}

module.exports = Translator;