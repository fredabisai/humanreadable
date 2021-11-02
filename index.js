/**
 * @param {Array.<string | number>} arr - Array of items
 */
exports.list = function(arr) {
    if(Array.isArray(arr) && arr.every(i => (typeof i === "string" || typeof i === 'number'))) {
        return arr.length === 1 ? arr[0]
             : [arr.slice(0, arr.length -1).join(', '), arr[arr.length - 1]].join(' and ')
    }
    return arr;
}
/**
 * @param {number} seconds - Time Seconds
 * @param {('LONG' | 'MEDIUM' | 'SHORT')} format - Time Seconds
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
           } else {
                hoursToDisplay = `${zeroPad(hours, 2).toString()}:`;
                minutesToDisplay = `${zeroPad(minutes, 2).toString()}:`;
                secondsToDisplay = zeroPad(secs, 2).toString();
           }
           return `${hoursToDisplay}${minutesToDisplay}${secondsToDisplay}`
       } catch(error) {
           throw error;
       }
   }
   return
}
/**
 * @param {number} num - Time Seconds
 * @param {number} places - Time Seconds
 */
function zeroPad(num, places) {
    var zero = places - num.toString().length + 1;
    return Array(+(zero > 0 && zero)).join("0") + num;
  }
