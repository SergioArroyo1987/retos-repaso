"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.iseven = void 0;
function zodiac(day, month) {
    var devolver = "";
    if (day > 21 && month == 3 || day > 0 && day <= 20 && month == 4) {
        devolver = "Aries";
    }
    if (day >= 21 && month == 4 || day > 0 && day <= 20 && month == 5) {
        devolver = "tauro";
    }
    if (day > 21 && month == 5 || day > 0 && day <= 21 && month == 6) {
        devolver = "gemenis";
    }
    if (day > 21 && month == 6 || day > 0 && day <= 22 && month == 7) {
        devolver = "cancer";
    }
    if (day > 22 && month == 7 || day > 0 && day <= 22 && month == 8) {
        devolver = "leo";
    }
    if (day > 22 && month == 8 || day > 0 && day <= 22 && month == 9) {
        devolver = "virgo";
    }
    if (day > 22 && month == 9 || day > 0 && day <= 23 && month == 10) {
        devolver = "libre";
    }
    if (day > 24 && month == 10 || day > 0 && day <= 22 && month == 11) {
        devolver = "escorpio";
    }
    if (day > 22 && month == 11 || day > 0 && day <= 21 && month == 12) {
        devolver = "sagitario";
    }
    if (day > 21 && month == 12 || day > 0 && day <= 20 && month == 1) {
        devolver = "capricornio";
    }
    if (day > 20 && month == 1 || day > 0 && day <= 19 && month == 2) {
        devolver = "Acuario";
    }
    if (day > 19 && month == 2 || day > 0 && day <= 20 && month == 3) {
        devolver = "piscis";
    }
    return devolver;
}
function continente(country) {
    if (country == "España" || country == "Francia" || country == "alemania") {
        console.log("Europa");
    }
    else if (country == "colombia" || country == "argentina" || country == "ecuador") {
        console.log("america");
    }
    else if (country == "marruecos" || country == "egipto" || country == "argelia") {
        console.log("africa");
    }
    else if (country == "india" || country == "japon" || country == "vietnam") {
        console.log("asia");
    }
    else if (country == "australia" || country == "oceania" || country == "nueva zelanda") {
        console.log("Oceania");
    }
    else {
        console.log("pais no encontrado");
    }
}
function iseven(numero) {
    if (numero % 2 == 0) {
        console.log("el numero " + numero + " Es par");
    }
    else {
        console.log("el numero " + numero + " Es impar");
    }
}
exports.iseven = iseven;
