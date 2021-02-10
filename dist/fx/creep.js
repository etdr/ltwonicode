"use strict";
function* range(s, e) {
    for (let i = s; i <= e; i++)
        yield i;
}
// TOP
// 768-789, 794-795, 829-836, 838, 842-844, 848-850, 855-856, 859, 861, 864-865
const tops = [
    ...range(768, 789),
    794, 795,
    ...range(829, 836),
    838,
    842, 843, 844,
    848, 849, 850,
    855, 856,
    859, 861,
    864, 865
].map(n => String.fromCharCode(n));
// BOTTOM
// 790-793, 796-819, 825-828, 837, 839-841, 845-846, 851-854, 857-858, 860, 863
const bottoms = [
    790, 791, 792, 793,
    ...range(796, 819),
    825, 826, 827, 828,
    837,
    839, 840, 841,
    845, 846,
    851, 852, 853, 854,
    857, 858,
    860, 863
].map(n => String.fromCharCode(n));
const middles = [
    820, 821, 822, 823, 824
].map(n => String.fromCharCode(n));
module.exports = class Creep {
    constructor() {
        this.tops = tops;
        this.bottoms = bottoms;
        this.middles = middles;
    }
    encode(text) {
        const encodeSingle = (c) => {
            let newC = c;
            newC += this.middles[Math.floor(Math.random() * this.middles.length)];
            for (let i = 0; i <= 15 * (1 - Math.random()); i++) {
                newC += this.tops[Math.floor(Math.random() * this.tops.length)];
            }
            for (let i = 0; i <= 15 * (1 - Math.random()); i++) {
                newC += this.bottoms[Math.floor(Math.random() * this.bottoms.length)];
            }
            return newC;
        };
        return text.split('').map(encodeSingle).join('');
    }
};
