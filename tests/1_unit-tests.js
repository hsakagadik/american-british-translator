const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');

suite('Unit Tests', () => {

    const translate = new Translator();
    // -- To British English -- //

    test('Translate "Mangoes are my favorite fruit." to British English', function () {
        const text = "Mangoes are my favorite fruit.";
        const translated = 'Mangoes are my <span class=\"highlight\">favourite</span> fruit.';
        assert.deepEqual(translate.translate(text, "american-to-british"), translated, 'should translate "Mangoes are my favorite fruit." to British English');
    });

    test('Translate "I ate yogurt for breakfast." to British English', function () {
        const text = "I ate yogurt for breakfast.";
        const translated = 'I ate <span class=\"highlight\">yoghurt</span> for breakfast.';
        assert.deepEqual(translate.translate(text, "american-to-british"), translated, 'should translate "I ate yogurt for breakfast." to British English');
    });

    test('Translate "We had a party at my friends condo." to British English', function () {
        const text = "We had a party at my friends condo.";
        const translated = 'We had a party at my friends <span class=\"highlight\">flat</span>.';
        assert.deepEqual(translate.translate(text, "american-to-british"), translated, 'should translate "We had a party at my friends condo." to British English');
    });

    test('Translate "Can you toss this in the trashcan for me?" to British English', function () {
        const text = "Can you toss this in the trashcan for me?";
        const translated = 'Can you toss this in the <span class=\"highlight\">bin</span> for me?';
        assert.deepEqual(translate.translate(text, "american-to-british"), translated, 'should translate "Can you toss this in the trashcan for me?" to British English');
    });

    test('Translate "The parking lot was full." to British English', function () {
        const text = "The parking lot was full.";
        const translated = 'The <span class=\"highlight\">car park</span> was full.';
        assert.deepEqual(translate.translate(text, "american-to-british"), translated, 'should translate "The parking lot was full." to British English');
    });

    test('Translate "Like a high tech Rube Goldberg machine." to British English', function () {
        const text = "Like a high tech Rube Goldberg machine.";
        const translated = 'Like a high tech <span class=\"highlight\">Heath Robinson device</span>.';
        assert.deepEqual(translate.translate(text, "american-to-british"), translated, 'should translate "Like a high tech Rube Goldberg machine." to British English');
    });

    test('Translate "To play hooky means to skip class or work." to British English', function () {
        const text = "To play hooky means to skip class or work.";
        const translated = 'To <span class=\"highlight\">bunk off</span> means to skip class or work.';
        assert.deepEqual(translate.translate(text, "american-to-british"), translated, 'should translate "To play hooky means to skip class or work." to British English');
    });

    test('Translate "No Mr. Bond, I expect you to die." to British English', function () {
        const text = "No Mr. Bond, I expect you to die.";
        const translated = 'No <span class=\"highlight\">Mr</span> Bond, I expect you to die.';
        assert.deepEqual(translate.translate(text, "american-to-british"), translated, 'should translate "No Mr. Bond, I expect you to die." to British English');
    });

    test('Translate "Dr. Grosh will see you now." to British English', function () {
        const text = "Dr. Grosh will see you now.";
        const translated = '<span class=\"highlight\">Dr</span> Grosh will see you now.';
        assert.deepEqual(translate.translate(text, "american-to-british"), translated, 'should translate "Dr. Grosh will see you now." to British English');
    });

    test('Translate "Lunch is at 12:15 today." to British English', function () {
        const text = "Lunch is at 12:15 today.";
        const translated = 'Lunch is at <span class=\"highlight\">12.15</span> today.';
        assert.deepEqual(translate.translate(text, "american-to-british"), translated, 'should translate "Lunch is at 12:15 today." to British English');
    });

    // -- To American English -- //

    test('Translate "We watched the footie match for a while." to American English', function () {
        const text = "We watched the footie match for a while.";
        const translated = 'We watched the <span class=\"highlight\">soccer</span> match for a while.';
        assert.deepEqual(translate.translate(text, "british-to-american"), translated, 'should translate "We watched the footie match for a while." to American English');
    });

    test('Translate "Paracetamol takes up to an hour to work." to American English', function () {
        const text = "Paracetamol takes up to an hour to work.";
        const translated = '<span class=\"highlight\">Tylenol</span> takes up to an hour to work.';
        assert.deepEqual(translate.translate(text, "british-to-american"), translated, 'should translate "Paracetamol takes up to an hour to work." to American English');
    });

    test('Translate "First, caramelise the onions." to American English', function () {
        const text = "First, caramelise the onions.";
        const translated = 'First, <span class=\"highlight\">caramelize</span> the onions.';
        assert.deepEqual(translate.translate(text, "british-to-american"), translated, 'should translate "First, caramelise the onions." to American English');
    });

    test('Translate "I spent the bank holiday at the funfair." to American English', function () {
        const text = "I spent the bank holiday at the funfair.";
        const translated = 'I spent the <span class=\"highlight\">public holiday</span> at the <span class=\"highlight\">carnival</span>.';
        assert.deepEqual(translate.translate(text, "british-to-american"), translated, 'should translate "I spent the bank holiday at the funfair." to American English');
    });

    test('Translate "I had a bicky then went to the chippy." to American English', function () {
        const text = "I had a bicky then went to the chippy.";
        const translated = 'I had a <span class="highlight">cookie</span> then went to the <span class="highlight">fish-and-chip shop</span>.';
        assert.deepEqual(translate.translate(text, "british-to-american"), translated, 'should translate "I had a bicky then went to the chippy." to American English');
    });

    test('Translate "Ive just got bits and bobs in my bum bag." to American English', function () {
        const text = "I've just got bits and bobs in my bum bag.";
        const translated = `I've just got <span class="highlight">odds and ends</span> in my <span class="highlight">fanny pack</span>.`;
        assert.deepEqual(translate.translate(text, "british-to-american"), translated, 'should translate "Ive just got bits and bobs in my bum bag." to American English');
    });

    test('Translate "The car boot sale at Boxted Airfield was called off." to American English', function () {
        const text = "The car boot sale at Boxted Airfield was called off.";
        const translated = 'The <span class="highlight">swap meet</span> at Boxted Airfield was called off.';
        assert.deepEqual(translate.translate(text, "british-to-american"), translated, 'should translate "The car boot sale at Boxted Airfield was called off." to American English');
    });

    test('Translate "Have you met Mrs Kalyani?" to American English', function () {
        const text = "Have you met Mrs Kalyani?";
        const translated = 'Have you met <span class="highlight">Mrs.</span> Kalyani?';
        assert.deepEqual(translate.translate(text, "british-to-american"), translated, 'should translate "Have you met Mrs Kalyani?" to American English');
    });

    test('Translate "Prof Joyner of Kings College, London." to American English', function () {
        const text = "Prof Joyner of Kings College, London.";
        const translated = '<span class="highlight">Prof.</span> Joyner of Kings College, London.';
        assert.deepEqual(translate.translate(text, "british-to-american"), translated, 'should translate "Prof Joyner of Kings College, London." to American English');
    });

    test('Translate "Tea time is usually around 4 or 4.30." to American English', function () {
        const text = "Tea time is usually around 4 or 4.30.";
        const translated = 'Tea time is usually around 4 or <span class="highlight">4:30</span>.';
        assert.deepEqual(translate.translate(text, "british-to-american"), translated, 'should translate "Tea time is usually around 4 or 4.30." to American English');
    });


    // -- Highlight translation -- // 

    test('Highlight translation in "Mangoes are my favorite fruit."', function () {
        const text = 'Mangoes are my favorite fruit.';
        const translated = 'Mangoes are my <span class="highlight">favourite</span> fruit.';
        assert.deepEqual(translate.translate(text, "american-to-british"), translated, 'should highlight translation in "Mangoes are my favorite fruit." ');
    });

    test('Highlight translation in "I ate yogurt for breakfast."', function () {
        const text = 'I ate yogurt for breakfast.';
        const translated = 'I ate <span class="highlight">yoghurt</span> for breakfast.';
        assert.deepEqual(translate.translate(text, "american-to-british"), translated, 'should highlight translation in "I ate yogurt for breakfast."');
    });

    test('Highlight translation in "We watched the footie match for a while."', function () {
        const text = 'We watched the footie match for a while.';
        const translated = 'We watched the <span class="highlight">soccer</span> match for a while.';
        assert.deepEqual(translate.translate(text, "british-to-american"), translated, 'should highlight translation in "We watched the footie match for a while."');
    });

    test('Highlight translation in "Paracetamol takes up to an hour to work."', function () {
        const text = 'Paracetamol takes up to an hour to work.';
        const translated = '<span class="highlight">Tylenol</span> takes up to an hour to work.';
        assert.deepEqual(translate.translate(text, "british-to-american"), translated, 'should highlight translation in "Paracetamol takes up to an hour to work."');
    });

});
