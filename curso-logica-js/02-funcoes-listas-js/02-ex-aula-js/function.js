//1
function consoleOla() {
    console.log("Olá mundo");
}
consoleOla();


//2
function saudacao(nome) {
    return `Olá, ${nome}`;
}
console.log(saudacao("Bini"));


//3
function recebeNumero(numero) {
    return numero * 2;

}
let resultadoRecebeNu = recebeNumero(5);
console.log(resultadoRecebeNu);


//4
function tresNumeros(a, b, c){
    return (a + b + c) / 3
}
let resultadoTresNumeros = tresNumeros(10, 10, 10);
console.log(resultadoTresNumeros);

//5
function qualMaior(a, b) {
    //    condição  ? true : false
    return a > b ? a : b;
}
let resultadoMaior = qualMaior(3, 4);
console.log(resultadoMaior);

//6 
function multiPorEle(numeroParametro) {
    return numeroParametro * numeroParametro;
}
let resultadoMulti = multiPorEle(5);
console.log(resultadoMulti);