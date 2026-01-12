//AULA (SEGUNDA-FEIRA) 12/01/2026


//FUNÇÃO TRADICIONAL
function dobraValor(valor) {
  let resultado = valor * 2
  return resultado
}

console.log(dobraValor(10))

// FUNÇÃO ANÔNIMA

const dobraValorAnonimo = function (valor) {
  let resultado = valor * 2
  return resultado
}

console.log(dobraValorAnonimo(100))

//FUNÇÃO ARROW (Função flecha)

const dobraValorArrowFunction = (valor) => {
  let resultado = valor * 2
  return resultado
}
console.log(dobraValorArrowFunction(150))

//EXEMPLO 1
const dobraValorArrowFunctionSimplificado = (valor) => {
  return valor * 2
}
console.log(dobraValorArrowFunctionSimplificado(1))

//EXEMPLO 2
const dobraValorArrowFunctionSimplificado2 = (valor) => valor * 2
console.log(dobraValorArrowFunctionSimplificado2(1))


//PRÁTICA 01 

//Crie uma função anônima que receba dois números e retorne a soma deles.
//Atribua essa função a uma variável
//chamada somar e teste algum valor

const somar = function (a, b) {
  return a + b
}

console.log(somar(9, 7))

//PRÁTICA 02

//Crie uma função anônima que receba um numero e:
//Retorne "Par" se o número for par
//retorne "Ímpar" se o numer for ímpar

const verificarParOuImpar = function (numero) {
  if (numero % 2 == 0) {
    return "Par"
  } else {
    return "Ímpar"
  }
}


console.log(verificarParOuImpar(10))
console.log(verificarParOuImpar(7))

//Prática 03

//Crie uma função anônima que receba uma nota de aluno e;
//retorne "Aprovado" se a nota for maior igual a 7.
//retorne "Recuperação" se a nota for maior ou igual a 3 e menor que 7.
//retorne "Reprovado" se a nota for menor que 3.

const resultadoAluno = function (nota) {
  if (nota >= 7 && nota <= 10) {
    return "Aprovado"
  } else if (nota < 3 && nota >= 0) {
    return "Reprovado"
  } else if (nota >= 3 && nota < 7) {
    return "Recuperação"
  } else {
    return "Valor invalido"
  }

}

console.log(resultadoAluno(15))

//Prática 04

//Crie uma função anonima que receba
//o nome, sobrenome e a ordem de apresentação 
//Se a ordem for "Direita" devera apresentar nome e sobrenome 
//Se a ordem for "inversa" deverá apresentar sobrenome e nome
// Nome tiver < 2 Letras

const verificaNomeCompleto = function (nome, sobrenome, ordem) {
  
  if(nome.length < 2 || sobrenome.length < 2)
    return `O nome ou sobrenome estão inválidos!`
  
  if (ordem.toLowerCase === "direita") {
    return `${nome} ${sobrenome}`
  } else if (ordem === "Inversa") {

    return `${sobrenome} ${nome}`
  } else {
    return `Valor inválido`
  }
}

console.log( verificaNomeCompleto ("Harrisson", "Vieira", "Inversa"))