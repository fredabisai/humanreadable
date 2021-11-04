const { expect, test } = require('@jest/globals');
const  {list, hoursBySeconds, monthByNumber, dayByNumber, commaSeparatedNumber} = require('../index');
/* Tests for list function */
describe( 'list', () => {
    test("list: Passing array [1, 2, 3] in list function should return text '1, 2 and 3'", () => {
        expect(list([1, 2, 3])).toEqual('1, 2 and 3');
    });
    test("list: Passing array ['Apple', 'Orange', 'Elephant'] in list function should return text 'Apple, Orange and Elephant'", () => {
        expect(list(['Apple', 'Orange', 'Elephant'])).toEqual('Apple, Orange and Elephant');
    });
    test("list: Passing array ['Apple'] in list function should return text 'Apple'", () => {
        expect(list(['Apple'])).toEqual('Apple');
    });
    test("list: Passing array ['Apple'] in list function should return text 'Apple'", () => {
        expect(list(['Apple'])).toEqual('Apple');
    });
    test("list: Passing a string or number type should throw error", () => {
        try {list('Bike');} catch (e) {expect(e.message).toBe('arr is not array of string or number');}
        try {list(10);} catch (e) {expect(e.message).toBe('arr is not array of string or number');}
    });
});
/* Tests hoursBySeconds function */
describe( 'hoursBySeconds', () => {
    test("hoursBySeconds: Passing 66000 seconds and LONG format in hoursBySeconds should return '18 hours, 20 minutes, 0 seconds'", () => {
        expect(hoursBySeconds(66000, 'LONG')).toEqual('18 hours, 20 minutes, 0 seconds')
    });
    test("hoursBySeconds: Passing 36489 seconds and LONG format in hoursBySeconds should return '10 hrs, 8 mins, 9 secs'", () => {
        expect(hoursBySeconds(36489, 'MEDIUM')).toEqual('10 hrs, 8 mins, 9 secs')
    });
    test("hoursBySeconds: Passing 34501 seconds and LONG format should return '09:35:01'", () => {
        expect(hoursBySeconds(34501, 'SHORT')).toEqual('09:35:01')
    });
    test("hoursBySeconds: Passing invalid seconds or format should throw error", () => {
        try {hoursBySeconds('Hello', 'SHORT');} catch (e) {
            expect(e.message).toBe('seconds is not a number');}
        try {hoursBySeconds(3600, 'INVALID')} catch (e) {
            expect(e.message).toBe('Invalid format, Format should either be LONG, MEDIUM or SHORT');}
    });
});
/* monthByNumber tests */
describe( 'monthByNumber', () => {
    test("monthByNumber: Passing 1  should return long name January", () => {
        expect(monthByNumber(1)).toEqual('January')});
    test("monthByNumber: Passing 3 and SHORT FORMAT  should return short name Mar", () => {
        expect(monthByNumber(3, 'SHORT')).toEqual('Mar')});
    test("monthByNumber: Passing 13 should return out of range error", () => {
        try {monthByNumber(1)} catch (e) {
            expect(e.message).toBe('monthNum is out of range')}});
    test("monthByNumber: Passing 9.5 should return decimal places error", () => {
        try {monthByNumber(9.5)} catch (e) {
            expect(e.message).toBe('monthNum should not have decimal places')}});
    test("monthByNumber: Passing wrong format should return wrong format error", () => {
        try {monthByNumber(9, 'UNKNOWN')} catch (e) {
            expect(e.message).toBe('Invalid format, Format should either be LONG or SHORT')}});
});
/* dayByNumber tests */
describe( 'dayByNumber', () => {
    test("dayByNumber: Passing 1  should return long name Sunday", () => {
        expect(dayByNumber(1)).toEqual('Sunday')});
    test("dayByNumber: Passing 3 and SHORT FORMAT  should return long name Tue", () => {
        expect(dayByNumber(3, 'SHORT')).toEqual('Tue')});
    test("dayByNumber: Passing 13 should return out of range error", () => {
        try {dayByNumber(1)} catch (e) {expect(e.message).toBe('dayNum is out of range')}});
    test("dayByNumber: Passing 5.5 should return decimal places error", () => {
        try {dayByNumber(5.5)} catch (e) {expect(e.message).toBe('dayNum should not have decimal places')}});
    test("dayByNumber: Passing wrong format should return wrong format error", () => {
        try {dayByNumber(4, 'UNKNOWN')} catch (e) {
            expect(e.message).toBe('Invalid format, Format should either be LONG or SHORT')}
    });
});
/* commaSeparatedNumber tests */
describe( 'commaSeparatedNumber', () => {
    test("commaSeparatedNumber: Passing 3400000  should return 3,400,000", () => {
        expect(commaSeparatedNumber(3400000)).toEqual('3,400,000')});
    test("commaSeparatedNumber: Passing 200  should return 200", () => {
        expect(commaSeparatedNumber(200)).toEqual('200')});
    test("commaSeparatedNumber: Passing string  should return Wrong num type", () => {
        try{commaSeparatedNumber('hello')}catch (e) {expect(e.message).toEqual('Wrong num type, function expects num to be number');}
    });
});

