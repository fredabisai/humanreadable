exports.longMonths = function() { return ["January","February","March","April","May","June","July",
                      "August","September","October","November","December"]};
exports.shortMonths = function() { return ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                        "Jul","Aug", "Sep", "Oct", "Nov", "Dec"]};
exports.longDayNames = function (){ return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];}
exports.shortDayNames = function (){return ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];}
exports.siFileUnits = function () {return ['kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];}
exports.iecFileUnits = function () {return ['KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];}
/**
 * @param {number} num - Number
 * @param {number} places - Number of zeros to add
 */
exports.zeroPad = function(num, places) {
    const zero = places - num.toString().length + 1;
    return Array(+(zero > 0 && zero)).join("0") + num;
}
/**
 * @param {*} item - Time Seconds
 * @param {('number' | 'string' | 'boolean')} type - Time Seconds
 * @param {string} message - Time Seconds
 */
exports.throwWrongTypeError = function(item, type, message) {
    if(typeof item !== type) {
        throw new Error(message);
    }
}
