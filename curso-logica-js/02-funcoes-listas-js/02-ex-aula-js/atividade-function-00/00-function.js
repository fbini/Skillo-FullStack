let titulo = document.querySelector('h1');
titulo.innerHTML = "Hora do Desafio";

function btnConsole() {
    alert("O botão foi clicado");
    console.log("O botão foi clicado");
}

function btnAlert() {
    alert("Eu odeio JS");
}

function btnPrompt() {
    let nomeCidade = prompt("Escreva o nome de uma cidade do Brasil");
    alert(`Estive em ${nomeCidade} e lembrei de você`);

}

function btnSoma() {
    alert("Some dois números");

    let n1 = Number (prompt("Escreva o primeiro número: "));
    let n2 = Number (prompt("Escreva o segundo número: "));

    let soma = n1 + n2;
    alert(`A soma entre os números ${n1} e ${n2} é ${soma}`);
}