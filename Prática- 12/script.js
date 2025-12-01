let nome = "Harrisson";
let idade = 24;

console.log("Olá, meu nome é " + nome + " e eu tenho " + idade + " anos");

let idadeUsuario = Number(prompt("Digite sua idade:"));

if (idadeUsuario >= 18) {
    console.log("Você é menor de idade.");
} else {
    console.log("Você é maior de idade.");
}

let nomes = ["Ana", "Bruno", "Carlos", "Daniela", "Eduardo"];

console.log("Primeiro nome: " + nomes[0]);
console.log("Último nome: " + nomes[nomes.length - 1]);
console.log("Quantidade de nomes no array: " + nomes.length);



