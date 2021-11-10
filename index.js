const {zeroPad, longMonths, shortMonths, longDayNames, shortDayNames, siFileUnits, iecFileUnits, throwWrongTypeError,
    throwWrongFormatError
} = require('./utils/main.util');
/**
 * @param {Array.<string | number>} arr - Array of items
 */
exports.list = function(arr) {
    if(Array.isArray(arr) && arr.every(i => (typeof i === "string" || typeof i === 'number'))) {
        return arr.length === 1 ? arr[0]
             : [arr.slice(0, arr.length -1).join(', '), arr[arr.length - 1]].join(' and ')
    }
    throw new Error('arr is not array of string or number');
}
/**
 * @param {number} seconds - Time Seconds
 * @param {('LONG' | 'MEDIUM' | 'SHORT')} format - Format
 * @return {string} - Hours
 */
exports.hoursBySeconds = function(seconds, format) {
    if(typeof seconds === 'number') {
        try {
            const hours = Math.floor(seconds / 3600);
            const minutes = Math.floor(seconds % 3600 / 60);
            const secs = Math.floor(seconds % 3600 % 60);
            let hoursToDisplay = ''; let minutesToDisplay = ''; let secondsToDisplay = '';
            if(format === 'LONG') {
                hoursToDisplay =  hours > 0 ? hours + (hours === 1 ? " hour, " : " hours, ") : "0 hours, ";
                minutesToDisplay = minutes > 0 ? minutes + (minutes === 1 ? " minute, " : " minutes, ") : "0 minutes, ";
                secondsToDisplay = secs > 0 ? secs + (secs === 1 ? " second" : " seconds") : "0 seconds";
            } else if(format === 'MEDIUM') {
                hoursToDisplay =  hours > 0 ? hours + (hours === 1 ? " hr, " : " hrs, ") : "0 hrs, ";
                minutesToDisplay = minutes > 0 ? minutes + (minutes === 1 ? " min, " : " mins, ") : "0 mins, ";
                secondsToDisplay = secs > 0 ? secs + (secs === 1 ? " sec" : " secs") : "0 secs";
            } else if(format === 'SHORT') {
                hoursToDisplay = `${zeroPad(hours, 2).toString()}:`;
                minutesToDisplay = `${zeroPad(minutes, 2).toString()}:`;
                secondsToDisplay = zeroPad(secs, 2).toString();
            } else {
                throw new Error('Invalid format, Format should either be LONG, MEDIUM or SHORT');
            }
            return `${hoursToDisplay}${minutesToDisplay}${secondsToDisplay}`
        } catch(error) {throw error;}}
    throw new Error('seconds is not a number');
}
/**
 * @param {number} monthNum - Month Number
 * @param {('LONG' | 'SHORT')} format - Format
 * @return {string} - Month Name
 */
exports.monthByNumber = function(monthNum, format= 'LONG') {
    if(typeof monthNum === 'number') {
        if(monthNum < 1 || monthNum > 12) {throw new Error('monthNum is out of range');}
        if(monthNum % 1 !== 0) {throw new Error('monthNum should not have decimal places');}
        let month = '';
        if(format === 'LONG') { month = longMonths()[monthNum - 1];
        } else if(format === 'SHORT') { month = shortMonths()[monthNum -1]
        } else {throwWrongFormatError(format, false)}return month;}
    throw new Error('monthNum is not a number');}
/**
 * @param {number} dayNum - Day Number
 * @param {('LONG' | 'SHORT')} format - Format
 * @return {string} - Day Name
 */
exports.dayByNumber = function(dayNum, format= 'LONG') {
    if(typeof dayNum === 'number') {
        if(dayNum < 1 || dayNum > 7) {throw new Error('dayNum is out of range');}
        if(dayNum % 1 !== 0) {throw new Error('dayNum should not have decimal places');}
        let day = '';
        if(format === 'LONG') { day = longDayNames()[dayNum - 1];
        } else if(format === 'SHORT') { day = shortDayNames()[dayNum -1]
        } else {throw new Error('Invalid format, Format should either be LONG or SHORT');}
        return day;
    }
    throwWrongTypeError(dayNum, typeof dayNum, 'dayNum');
}
/**
 * @param {number} num - Number
 * @return {string} - Comma separated number
 */
exports.commaSeparatedNumber = function(num) {
    if(typeof num === 'number'){
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    throwWrongTypeError(num, typeof num, 'num');
}
/**
 * @param {number} bytes Number of bytes.
 * @param {boolean} isSI True to use metric (SI) units / powers of 1000. False to use binary (IEC), / powers of 1024.
 * @param {number} dp Number of decimal places to display.
 * @return {string} Formatted string.
 */
exports.fileSizeByBytes = function (bytes,isSI= false, dp= 1) {
    if(typeof bytes === "number") {
        throwWrongTypeError(isSI, typeof isSI, 'isSI');
        throwWrongTypeError(dp, typeof dp, 'dp')
        const threshold = isSI ? 1000 : 1024;
        if (Math.abs(bytes) < threshold) {
            return bytes + ' B';
        }
        const units = isSI ? siFileUnits() : iecFileUnits();
        let index = -1;
        const r = 10 ** dp;
        do {
            bytes /= threshold;
            ++index;
        } while (Math.round(Math.abs(bytes) * r) / r >= threshold && index < units.length - 1);
        return bytes.toFixed(dp) + ' ' + units[index];
    }
    throwWrongTypeError(bytes, typeof bytes, 'bytes');
}
/**
 * @param {Date | string} date - Date in format MM/dd/yyyy or   MM-dd-yyyy
 * @param {('LONG' | 'MEDIUM' | 'SHORT')} format - Format
 * @return {string} - Years
 */
exports.ageInYearsByDate = function (date, format) {
      const birthDate = new Date(date);const ageDifMs = Date.now() - birthDate.getTime();
      const ageDate = new Date(ageDifMs);
      const years = Math.abs(ageDate.getUTCFullYear() - 1970);
      if(isNaN(years)) {throw new Error('Invalid date format');}
      const yearsByFormat = {'LONG': `${years} years old`, 'MEDIUM': years.toString() + ' years', 'SHORT': years.toString() };
      return yearsByFormat.hasOwnProperty(format) ? yearsByFormat[format] : throwWrongFormatError(format);
}
