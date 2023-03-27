"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = void 0;
function evernumbers(numero) {
    var a;
    for (a = 0; a <= numero; a++) {
        if (a % 2 != 0) {
            console.log(a);
        }
    }
}
function myrevert(array) {
    var a = array.length;
    var devolver = [];
    var b = 0;
    for (a; a <= 0; a--) {
        devolver.push(array[b]);
        b++;
    }
    return devolver;
}
function israinbow(array) {
    var colores = ["rojo", "naranja", "amarillo", "verde", "azul", "anil", "violeta"];
    for (var a = 0; a < array.length; a++) {
        var c = false;
        for (var b = 0; b < colores.length; b++) {
            if (array[a] == colores[b]) {
                console.log("El color:" + array[a] + " " + "esta en el arcoiris");
                c = true;
            }
        }
        if (c = false) {
            console.log("El color:" + array[a] + " " + "no esta en el arcoiris");
        }
    }
}
function add(array) {
    var devolver = 0;
    for (var a = 0; a < array.length; a++) {
        devolver += array[a].length;
    }
    return devolver;
}
exports.add = add;
