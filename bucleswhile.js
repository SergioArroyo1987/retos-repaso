"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.haseven = void 0;
function haseven(b) {
    var devolver = false;
    var a = 0;
    while (a < b.length) {
        if (b[a] % 2 == 0) {
            devolver = true;
        }
        a++;
    }
    return devolver;
}
exports.haseven = haseven;
function startwithm(array) {
    var devolver = false;
    var a = 0;
    while (a < array.length) {
        if (array[a].charAt(0) == "m") {
            devolver = true;
        }
        else {
            devolver = false;
        }
        a++;
    }
    return devolver;
}
