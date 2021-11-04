exports.longMonths = function() { return ["January","February","March","April","May","June","July",
                      "August","September","October","November","December"]};
exports.shortMonths = function() { return ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                        "Jul","Aug", "Sep", "Oct", "Nov", "Dec"]};
exports.longDayNames = function (){ return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];}
exports.shortDayNames = function (){return ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];}
/**
 * @param {number} num - Time Seconds
 * @param {number} places - Time Seconds
 */
exports.zeroPad = function(num, places) {
    const zero = places - num.toString().length + 1;
    return Array(+(zero > 0 && zero)).join("0") + num;
}
