
// Uma loja online  cobra um frete com base na distancia do cliente.
//Elabore uma função que pergunt:
// A disntancia (em km) até o enderço do cliente 
// peso da encomenda (em kg)

// E aplique as seguintes regras:
// Se a ditância for ate 100k,, o frete base é R$ 10,00; senão, é R$ 20,00
// Para cada quilo acima de 5kg, cobra=-se R$ 2,10 adicionais 
// Ao final, exiba o valor total do frete

function calcularFrete() {
    // Pergunta os dados ao usuário
    const distancia = parseFloat(prompt("Informe a distância até o endereço do cliente (em km):"));
    const peso = parseFloat(prompt("Informe o peso da encomenda (em kg):"));
  
    // Define o frete base conforme a distância
    let frete = 0;
    if (distancia <= 100) {
      frete = 10.0;
    } else {
      frete = 20.0;
    }
  
    // Calcula o adicional por peso acima de 5kg
    if (peso > 5) {
      const pesoExtra = peso - 5;
      frete += pesoExtra * 2.10;
    }
  
    // Exibe o valor total do frete
    alert(`O valor total do frete é R$ ${frete.toFixed(2)}`);
  }
  
  // Chamada da função
  calcularFrete();