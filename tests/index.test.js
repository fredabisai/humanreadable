const { expect, test } = require('@jest/globals');
const  {list, hoursBySeconds} = require('../index');
/* Tests for list function */
test("Passing array [1, 2, 3] in list function should return text '1, 2 and 3'", () => {
    expect(list([1,2,3])).toEqual('1, 2 and 3');
});
test("Passing array ['Apple', 'Orange', 'Elephant'] in list function should return text 'Apple, Orange and Elephant'", () => {
    expect(list(['Apple', 'Orange', 'Elephant'])).toEqual('Apple, Orange and Elephant');
});
test("Passing array ['Apple'] in list function should return text 'Apple'", () => {
    expect(list(['Apple'])).toEqual('Apple');
});
test("Passing array ['Apple'] in list function should return text 'Apple'", () => {
    expect(list(['Apple'])).toEqual('Apple');
});
test("Passing a string or number type should throw error", () => {
    try {
        list('Bike');
    } catch (e) {
        expect(e.message).toBe('arr is not array of string or number');
    }
    try {
        list(10);
    } catch (e) {
        expect(e.message).toBe('arr is not array of string or number');
    }


});

/* Test hoursBySeconds function */
test("Passing 66000 seconds and LONG format should return '18 hours, 20 minutes, 0 seconds'", () => {
    expect(hoursBySeconds(66000, 'LONG')).toEqual('18 hours, 20 minutes, 0 seconds')
});
test("Passing 36489 seconds and LONG format should return '10 hrs, 8 mins, 9 secs'", () => {
    expect(hoursBySeconds(36489, 'MEDIUM')).toEqual('10 hrs, 8 mins, 9 secs')
});
test("Passing 34501 seconds and LONG format should return '09:35:01'", () => {
    expect(hoursBySeconds(34501, 'SHORT')).toEqual('09:35:01')
});
test("Passing invalid seconds or format should throw error", () => {
    try {
        hoursBySeconds('Hello', 'SHORT');
    } catch (e) {
        expect(e.message).toBe('seconds is not a number');
    }

    try {
        hoursBySeconds(3600, 'INVALID')
    } catch (e) {
        expect(e.message).toBe('Invalid format, Format should either be LONG, MEDIUM or SHORT');
    }


});
