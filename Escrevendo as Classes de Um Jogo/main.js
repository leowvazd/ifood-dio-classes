// Definição da classe Heroi
class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  // Método para o herói atacar
  atacar() {
    let ataque;

    // Determina o tipo de ataque com base no tipo do herói
    switch (this.tipo) {
      case 'mago':
        ataque = 'usou magia';
        break;
      case 'guerreiro':
        ataque = 'usou espada';
        break;
      case 'monge':
        ataque = 'usou artes marciais';
        break;
      case 'ninja':
        ataque = 'usou shuriken';
        break;
      default:
        ataque = 'usou um ataque desconhecido';
    }

    // Exibe a mensagem de ataque
    console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`);
  }
}

// Exemplo de uso da classe
const heroi1 = new Heroi('Aragorn', 30, 'guerreiro');
heroi1.atacar();

const heroi2 = new Heroi('Gandalf', 100, 'mago');
heroi2.atacar();
