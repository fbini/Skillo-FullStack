//1
function olaMundo() {
    console.log("Olá, mundo");
}
olaMundo();

//2
function nomeTela(nome) {
    console.log(`Olá, ${nome}`);
}
nomeTela("Bin");

//3
function numeroDobro(numero){
    return numero * 2;
}
let resultadoDobro = numeroDobro(2);
console.log(resultadoDobro)

//4
function numeroTriplo(a, b, c){
    return (a + b + c) /3;
}
let resultadoTri = numeroTriplo(10, 10, 10);
console.log(resultadoTri);

//5
function maiorNumero(a, b){
    return a > b ? a : b;
}
let resultadoMaior = maiorNumero(15, 5);
console.log(resultadoMaior);

//6
function multiplicacao(numero) {
    return numero * numero;
}
let resultadoMulti = multiplicacao(5);
console.log(resultadoMulti)