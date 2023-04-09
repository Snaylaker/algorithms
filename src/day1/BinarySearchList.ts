export default function bs_list(haystack: number[], needle: number): boolean {
    let lo = 0;
    let high = haystack.length;
    do {
        let m = Math.floor((high + lo) / 2);
        if (haystack[m] === needle) return true;
        if (haystack[m] < needle) {
            lo = m + 1;
        }
        if (haystack[m] > needle) {
            high = m - 1;
        }
    } while (lo < high);
    return false;
}
