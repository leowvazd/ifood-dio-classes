// Função que calcula o saldo e determina o nível do jogador
function calcularNivel(vitorias, derrotas) {
  // Calcula o saldo de Ranqueadas (vitórias - derrotas)
  var saldoVitorias = vitorias - derrotas;

  // Determina o nível com base no saldo de vitórias
  var nivel;

  if (vitorias < 10) {
    nivel = "Ferro";
  } else if (vitorias >= 11 && vitorias <= 20) {
    nivel = "Bronze";
  } else if (vitorias >= 21 && vitorias <= 50) {
    nivel = "Prata";
  } else if (vitorias >= 51 && vitorias <= 80) {
    nivel = "Ouro";
  } else if (vitorias >= 81 && vitorias <= 90) {
    nivel = "Diamante";
  } else if (vitorias >= 91 && vitorias <= 100) {
    nivel = "Lendário";
  } else {
    nivel = "Imortal";
  }

  // Retorna a mensagem com o saldo e o nível do jogador
  return "O Herói tem um saldo de " + saldoVitorias + " está no nível de " + nivel;
}

// Exemplo de uso da função
var resultado = calcularNivel(60, 20); // Substitua os valores de vitórias e derrotas conforme necessário
console.log(resultado);
