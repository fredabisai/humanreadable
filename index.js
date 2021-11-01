exports.list = function(arr) {
    if(Array.isArray(arr)) {
        return arr.length === 1 ? arr[0]
             : [arr.slice(0, arr.length -1).join(', '), arr[arr.length - 1]].join(' and ')
    }
    return arr;
}