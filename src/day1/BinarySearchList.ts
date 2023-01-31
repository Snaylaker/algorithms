export default function bs_list(haystack: number[], needle: number): boolean {
    let lo = 0;
    let hi = haystack.length;
    do {
        let m = Math.floor(lo + (hi - lo) / 2);
        if (haystack[m] === needle) return true;
        if (haystack[m] > needle) {
            hi = m;
        } else {
            lo = m + 1;
        }
    } while (lo < hi);
    return false;
}
