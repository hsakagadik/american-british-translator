const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');

suite('Unit Tests', () => {

    // -- To British English -- //

    test('Translate "Mangoes are my favorite fruit." to British English', function () {
        assert.deepEqual('', '', 'should translate "Mangoes are my favorite fruit." to British English');
    });
    
    test('Translate "I ate yogurt for breakfast." to British English', function () {
        assert.deepEqual('', '', 'should translate "I ate yogurt for breakfast." to British English');
    });

    test('Translate "We had a party at my friends condo." to British English', function () {
        assert.deepEqual('', '', 'should translate "We had a party at my friends condo." to British English');
    });

    test('Translate "Can you toss this in the trashcan for me?" to British English', function () {
        assert.deepEqual('', '', 'should translate "Can you toss this in the trashcan for me?" to British English');
    });

    test('Translate "The parking lot was full." to British English', function () {
        assert.deepEqual('', '', 'should translate "The parking lot was full." to British English');
    });

    test('Translate "Like a high tech Rube Goldberg machine." to British English', function () {
        assert.deepEqual('', '', 'should translate "Like a high tech Rube Goldberg machine." to British English');
    });

    test('Translate "To play hooky means to skip class or work." to British English', function () {
        assert.deepEqual('', '', 'should translate "To play hooky means to skip class or work." to British English');
    });

    test('Translate "No Mr. Bond, I expect you to die." to British English', function () {
        assert.deepEqual('', '', 'should translate "No Mr. Bond, I expect you to die." to British English');
    });

    test('Translate "Dr. Grosh will see you now." to British English', function () {
        assert.deepEqual('', '', 'should translate "Dr. Grosh will see you now." to British English');
    });

    test('Translate "Lunch is at 12:15 today." to British English', function () {
        assert.deepEqual('', '', 'should translate "Lunch is at 12:15 today." to British English');
    });

    // -- To American English -- //

    test('Translate "We watched the footie match for a while." to American English', function () {
        assert.deepEqual('', '', 'should translate "We watched the footie match for a while." to American English');
    });

    test('Translate "Paracetamol takes up to an hour to work." to American English', function () {
        assert.deepEqual('', '', 'should translate "Paracetamol takes up to an hour to work." to American English');
    });

    test('Translate "First, caramelise the onions." to American English', function () {
        assert.deepEqual('', '', 'should translate "First, caramelise the onions." to American English');
    });

    test('Translate "I spent the bank holiday at the funfair." to American English', function () {
        assert.deepEqual('', '', 'should translate "I spent the bank holiday at the funfair." to American English');
    });

    test('Translate "I had a bicky then went to the chippy." to American English', function () {
        assert.deepEqual('', '', 'should translate "I had a bicky then went to the chippy." to American English');
    });

    test('Translate "Ive just got bits and bobs in my bum bag." to American English', function () {
        assert.deepEqual('', '', 'should translate "Ive just got bits and bobs in my bum bag." to American English');
    });

    test('Translate "The car boot sale at Boxted Airfield was called off." to American English', function () {
        assert.deepEqual('', '', 'should translate "The car boot sale at Boxted Airfield was called off." to American English');
    });

    test('Translate "Have you met Mrs Kalyani?" to American English', function () {
        assert.deepEqual('', '', 'should translate "Have you met Mrs Kalyani?" to American English');
    });

    test('Translate "Prof Joyner of Kings College, London." to American English', function () {
        assert.deepEqual('', '', 'should translate "Prof Joyner of Kings College, London." to American English');
    });

    test('Translate "Tea time is usually around 4 or 4.30." to American English', function () {
        assert.deepEqual('', '', 'should translate "Tea time is usually around 4 or 4.30." to American English');
    });


    // -- Highlight translation -- // 

    test('Highlight translation in "Mangoes are my favorite fruit."', function () {
        assert.deepEqual('', '', 'should highlight translation in "Mangoes are my favorite fruit." ');
    });

    test('Highlight translation in "I ate yogurt for breakfast."', function () {
        assert.deepEqual('', '', 'should highlight translation in "I ate yogurt for breakfast."');
    });

    test('Highlight translation in "We watched the footie match for a while."', function () {
        assert.deepEqual('', '', 'should highlight translation in "We watched the footie match for a while."');
    });

    test('Highlight translation in "Paracetamol takes up to an hour to work."', function () {
        assert.deepEqual('', '', 'should highlight translation in "Paracetamol takes up to an hour to work."');
    });

});
