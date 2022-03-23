module.exports.sum = function(...x) {
    let r = 0;
    for(let i = 0; i < x.length; i++) {
        r = r + x[i];
    }
    return r;
}
module.exports.min = function(...x) {
    let r = x[0];
    for(let i = 0; i < x.length; i++) {
        if(x[i] < r) {
            r = x[i];
        }
    }
    return r;
}