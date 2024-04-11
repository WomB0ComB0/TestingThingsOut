/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function (num, k) {
    const arr = []
    for (const d of num) {
        while (k > 0 && arr.length > 0 && d < arr[arr.length - 1]) {
            arr.pop()
            k--
        }
        if (d === "0" && arr.length === 0) continue
        arr.push(d)
    }
    while (arr.length > 0 && k > 0) {
        arr.pop()
        k--
    }
    if (arr.length === 0) return "0"
    return arr.join("")
};

/**
function removeKdigits(num: string, k: number): string {
    const arr: string[] = []
    for (const d of num) {
        while(k > 0 && arr.length > 0 && d < arr[arr.length - 1]) {
            arr.pop()
            k--
        }
        if (d === "0" && arr.length === 0) continue
        arr.push(d)
    }
    while (arr.length > 0 && k > 0) {
        arr.pop()
        k--
    }
    if (arr.length === 0) return "0"
    return arr.join("")
};
*/