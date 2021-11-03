/**
 * @param {number} num - Time Seconds
 * @param {number} places - Time Seconds
 */
exports.zeroPad = function(num, places) {
    const zero = places - num.toString().length + 1;
    return Array(+(zero > 0 && zero)).join("0") + num;
}
