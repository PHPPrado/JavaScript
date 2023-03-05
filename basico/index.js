var nome = "João";
let nome2 = "7";
const nome3 = "Gustavo";
var numero = 55.77;
console.log(typeof nome);
console.log(7 + parseInt(nome2));
//window.alert("Tudo bem?");
//var nome = prompt("Digite seu nome: ");
console.log(numero.toFixed(1));
const lista = ["Pedro", "Ana", "Vitória"];
lista.push("Fábio");
lista.unshift("Caio");
console.log(lista);
delete lista;
function bomDia(nome){
    console.log("Bom dia " + nome);
}
bomDia("Pedro");
const pessoa = {
    nome: "Pedro",
    idade: 20,

    falar() {
        console.log("Estou falando");
        ++this.idade;
    }
}
console.log(pessoa.nome);
console.log(pessoa.idade);
pessoa.falar();
console.log(pessoa.idade);
if (nome == nome2) {
    console.log("Igual");
} else {
    console.log("Diferente");
}
const data = new Date();
console.log(data);
for (var x = 0; x <= 3; x++){
    console.log(x);
}
const frutas = ["Banana", "Maça", "Uva"];
for (let x in frutas){
    console.log(x);
}
for (let x of frutas){
    console.log(x);
}
frutas.forEach(function(valor, indice){
    console.log(valor, indice)
})
const paragrafos = document.querySelector('.paragrafos');
const ps = document.querySelectorAll('p');

const estilo = getComputedStyle(document.body);
const estilo2 = estilo.backgroundColor;
console.log(estilo2)

for (let p of ps) {
    p.style.backgroundColor = estilo2;
}