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
