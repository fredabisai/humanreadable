## HUMANCANREAD

It is npm package which is used to convert javascript variable to human readable texts/strings.

## Installation

`npm i humancanread --save`

## Usage

#### 1. list
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