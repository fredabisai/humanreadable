import {expect, test} from "@jest/globals";
import {
    ageInYearsByDate,
    commaSeparatedNumber,
    dayByNumber,
    fileSizeByBytes,
    hoursBySeconds, list,
    monthByNumber
} from "../index";

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
});
/* monthByNumber tests */
describe( 'monthByNumber', () => {
    test("monthByNumber: Passing 1  should return long name January", () => {
        expect(monthByNumber(1)).toEqual('January')});
    test("monthByNumber: Passing 3 and SHORT FORMAT  should return short name Mar", () => {
        expect(monthByNumber(3, 'SHORT')).toEqual('Mar')});
    test("monthByNumber: Passing 13 should return out of range error", () => {
        try {monthByNumber(13)} catch (e) {
            console.log(e);
            expect(e?.message).toBe('monthNum is out of range')}});
    test("monthByNumber: Passing 9.5 should return decimal places error", () => {
        try {monthByNumber(9.5)} catch (e) {
            expect(e?.message).toBe('monthNum should not have decimal places')}});
});
/* dayByNumber tests */
describe( 'dayByNumber', () => {
    test("dayByNumber: Passing 1  should return long name Sunday", () => {
        expect(dayByNumber(1)).toEqual('Sunday')});
    test("dayByNumber: Passing 3 and SHORT FORMAT  should return long name Tue", () => {
        expect(dayByNumber(3, 'SHORT')).toEqual('Tue')});
    test("dayByNumber: Passing 13 should return out of range error", () => {
        try {dayByNumber(1)} catch (e) {expect(e?.message).toBe('dayNum is out of range')}});
    test("dayByNumber: Passing 5.5 should return decimal places error", () => {
        try {dayByNumber(5.5)} catch (e) {expect(e?.message).toBe('dayNum should not have decimal places')}});
});
/* commaSeparatedNumber tests */
describe( 'commaSeparatedNumber', () => {
    test("commaSeparatedNumber: Passing 3400000  should return 3,400,000", () => {
        expect(commaSeparatedNumber(3400000)).toEqual('3,400,000')});
    test("commaSeparatedNumber: Passing 200  should return 200", () => {
        expect(commaSeparatedNumber(200)).toEqual('200')});

});

/* commaSeparatedNumber tests */
describe( 'fileSizeByBytes', () => {
    test("fileSizeByBytes: Passing 2048 bytes  should return 2 KiB", () => {
        expect(fileSizeByBytes(2048)).toEqual('2.0 KiB')});
    test("fileSizeByBytes: Passing 3000000 bytes  with isSI true should return 3 MB ", () => {
        expect(fileSizeByBytes(3000000, true)).toEqual('3.0 MB')});
    test("fileSizeByBytes: Passing 3500 bytes  with dp 2 should return 3 KiB ", () => {
        expect(fileSizeByBytes(3500, false, 2)).toEqual('3.42 KiB')});
});
/* commaSeparatedNumber tests */
describe( 'ageInYearsByDate', () => {
    const date = new Date().getDate();
    const month = new Date().getMonth();
    const year = new Date().getFullYear();
    const yearDiff = year - 1994;
    test(`ageInYearsByDate: Passing ${month}/${date}/1994 and LONG format should return ${yearDiff} years old`, () => {
        expect(ageInYearsByDate(`${month}/${date}/1994`, 'LONG')).toEqual(`${yearDiff} years old`)});
    test(`ageInYearsByDate: Passing ${month}/${date}/1994 and MEDIUM format should return ${yearDiff} years`, () => {
        expect(ageInYearsByDate(`${month}/${date}/1994`, 'MEDIUM')).toEqual(`${yearDiff} years`)});
    test(`ageInYearsByDate: Passing ${month}/${date}/1994 and SHORT format should return ${yearDiff}`, () => {
        expect(ageInYearsByDate(`${month}/${date}/1994`, 'SHORT')).toEqual(`${yearDiff}`)});
    test("ageInYearsByDate: Passing wrong date format  should return Wrong date format error", () => {
        try{ageInYearsByDate('25/01/2010', 'LONG')}catch (e) {expect(e?.message).toBe('Invalid date format');}
    });
});

