function list(arr: Array<number | string>): string {
    if(Array.isArray(arr) && arr.every(i => (typeof i === "string" || typeof i === 'number'))) {
        return arr.length === 1 ? arr[0]?.toString()
            : [arr.slice(0, arr.length -1).join(', '), arr[arr.length - 1]].join(' and ')
    }
    throw new Error('arr is not array of string or number');
}
