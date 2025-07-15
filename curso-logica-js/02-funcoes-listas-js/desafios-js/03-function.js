//1
function massaCorporal(altura, peso) {
    return peso / (altura * altura)  ;
} 
let resultadoImc = massaCorporal(1.75, 50);
console.log(resultadoImc);

//2 
function valorFatorial(numero) {
    
}


//3 
function converteDolar(dolar) {
    let valorDolar = 5.55;
    let valorReais = dolar * valorDolar;
    return (valorReais);
}
let resultadoDolar = converteDolar(10);
console.log(resultadoDolar);

//4
function perimetroArea(altura, largura) {
    area = altura * largura
    perimetro = 2 * (altura + largura)
    return area, perimetro

}
let resultadoPerimeArea = perimetroArea(15, 5);
    console.log(`Área ${area} metros quadrados`);
    console.log(`Perímetro ${perimetro} metros`);


//5
function circuloPerimetro(raio) {
    area2 = Math.PI * raio * raio;
    perimetro2 = 2 * Math.PI * raio;
    return area2, perimetro2
}
let resultadoCirculoP = circuloPerimetro(10);
    console.log(resultadoCirculoP);
    console.log(`Área do circulo ${area2} metros quadrados`);
    console.log(`Perímetro do circulo ${perimetro2} metros`);

//6
function tabuada(numeroDado) {
    for(let i = 1; i <=10; i++) {
        let resultado = numeroDado * i;   
        console.log(`${numeroDado} x ${i} = ${resultado}`)
    }
}
let resultadoTabuada = tabuada(10);