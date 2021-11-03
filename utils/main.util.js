exports.longMonths = ["January","February","March","April","May","June","July",
                      "August","September","October","November","December"];
exports.shortMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                        "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];
/**
 * @param {number} num - Time Seconds
 * @param {number} places - Time Seconds
 */
exports.zeroPad = function(num, places) {
    const zero = places - num.toString().length + 1;
    return Array(+(zero > 0 && zero)).join("0") + num;
}
