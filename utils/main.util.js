exports.longMonths = function() { return ["January","February","March","April","May","June","July",
                      "August","September","October","November","December"]};
exports.shortMonths = function() { return ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"]};
exports.longDayNames = function (){ return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];}
exports.shortDayNames = function (){return ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];}
exports.siFileUnits = function () {return ['kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];}
exports.iecFileUnits = function () {return ['KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];}
/**
 * @param {number} num - Number
 * @param {number} places - Number of zeros to add
 */
exports.zeroPad = function(num, places) {const zero = places - num.toString().length + 1;
    return Array(+(zero > 0 && zero)).join("0") + num;}
/**
 * @param {*} item - Time Seconds
 * @param {('number' | 'string' | 'boolean' | 'Date')} type - Time Seconds
 * @param {string} variableName - Time Seconds
 */
exports.throwWrongTypeError = function(item, type, variableName) {if(typeof item !== type) {
        throw new Error('Wrong ' + variableName + ' type, the function expects '+ variableName + ' to be a ' + type);}}
/**
 * @param {*} item - Time Seconds
 * @param {('LONG' | 'MEDIUM' | 'SHORT')} format -Format
 * @param {boolean} hasMedium - Has Medium Format
 */
exports.throwWrongFormatError = function(format, hasMedium = true){const formats = ['LONG','MEDIUM','SHORT'];
    const hasMediumMsg = 'Invalid format, Format should either be LONG, MEDIUM or SHORT';
    const hasNoMediumMsg = 'Invalid format, Format should either be LONG or SHORT';
    if(formats.includes(format)){if(!hasMedium && format === 'MEDIUM') {throw new Error(hasNoMediumMsg);}} else {
        if(hasMedium) {throw new Error(hasMediumMsg)}else{throw new Error(hasNoMediumMsg)}}}
