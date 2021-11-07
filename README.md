## HUMANCANREAD

It is package which is used to convert javascript variable to human-readable texts/strings.

## Installation

`npm i humancanread --save`

## Usage

#### 1. list
Returns human-readable list of items from an array
```
/*
* parameters: arr
* seconds: Array
*/
import {list} from 'humancanread';
const readableList = list(['Apple', 'Orange', 'Banana']);
// Result: Apple, Orange and Banana
```
#### 2. hoursBySeconds
Returns hours, minutes and seconds according to format by passing seconds
```
/*
* parameters: seconds, format
* seconds: number
* format: 'LONG' | 'MEDIUM' | 'SHORT'
*/
import {hoursBySeconds} from 'humancanread';

const hoursLong = hoursBySeconds(66000, 'LONG');
// Result: 18 hours, 20 minutes, 0 seconds
const hoursMedium = hoursBySeconds(36489, 'MEDIUM');
// Result: 10 hrs, 8 mins, 9 secs
const hoursShort = hoursBySeconds(34501, 'SHORT')
// Result: 09:35:01
```
#### 3. monthByNumber
Returns month name by passing a number
```
/*
* parameters: monthNum and format
* monthNum: number
* format: 'LONG' | 'SHORT'
*/
import {monthByNumber} from 'humancanread';
const month = monthByNumber(1, 'LONG');
// Result: January
const month = monthByNumber(3, 'SHORT');
// Result: Mar
```
#### 4. dayByNumber
Returns day name by passing a number
```
/*
* parameters: dayNum and format
* dayNum: number
* format: 'LONG' | 'SHORT'
*/
import {dayByNumber} from 'humancanread';
const day = dayByNumber(1, 'LONG');
// Result: Sunday
const day = dayByNumber(3, 'SHORT');
// Result: Tue
```
#### 5. commaSeparatedNumber
Returns comma separated number by passing a number
```
/*
* parameters: num
* num: number
*/
import {commaSeparatedNumber} from 'humancanread';
const newNum = commaSeparatedNumber(3400000);
// Result: 3,400,000
```
#### 6. fileSizeByBytes
Returns file size string by passing bytes
```
/*
* parameters: bytes, isSI and dp
* bytes: number
* isSI: boolean - True to use metric (SI) units / powers of 1000. False to use binary (IEC), / powers of 1024
* dp: number - Decimal places
*/
import {fileSizeByBytes} from 'humancanread';
const fileSize = fileSizeByBytes(2048);
// Result: 2.0 KiB
```