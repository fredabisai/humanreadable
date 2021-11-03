const {zeroPad, longMonths, shortMonths} = require('./utils/main.util');
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
            let hoursToDisplay = '';
            let minutesToDisplay = '';
            let secondsToDisplay = '';
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
        } catch(error) {
            throw error;
        }
    }
    throw new Error('seconds is not a number');
}
/**
 * @param {number} monthNum - Month Number
 * @param {('LONG' | 'SHORT')} format - Format
 * @return {string} - Month Name
 */
exports.monthByNumber = function(monthNum, format= 'LONG') {
    if(typeof monthNum === 'number') {
        if(monthNum < 1 || monthNum > 12) {
            throw new Error('monthNum is out of range');
        }
        if(monthNum % 1 !== 0) {
            throw new Error('monthNum should not have decimal places');
        }
        let month = '';
        if(format === 'LONG') {
            month = longMonths()[monthNum - 1];
        } else if(format === 'SHORT') {
            month = shortMonths()[monthNum -1]
        } else {
            throw new Error('Invalid format, Format should either be LONG or SHORT');
        }
        return month;
    }
    throw new Error('monthNum is not a number');
}
