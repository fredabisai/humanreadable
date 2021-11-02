const { expect, test } = require('@jest/globals');
const  {list} = require('../index');
/* Tests for list function */
test("Passing array [1, 2, 3] in list function should return text '1, 2 and 3'", () => {
    expect(list([1,2,3])).toEqual('1, 2, and 3');
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
test("Passing a string or number type should return the same data", () => {
    expect(list('Bike')).toEqual('Bike');
    expect(list(10)).toEqual(10);
});