let titulo = document.querySelector("h1");
titulo.innerHTML = "Hora do desafio"; 

function verificarConsole(){
    console.log("Botão foi clicado");
}
function verificarAlert(){
    alert("Eu amo JS s2");
}
function verificarPrompt(){
    let cidade = prompt("Digite um nome de uma cidade");
    alert(`Estive em ${cidade} e lembrei de você!`);
}
function verificarSoma(){
    let n1 = parseInt(prompt("Digite um número"));
    let n2 = parseInt(prompt("Digite mais um número"));
    let resultado = n1 + n2;
    alert(`O resultado é: ${resultado}`);
}