// Definindo uma classe chamada "Calculadora"
class Calculadora {
  // Construtor da classe
  constructor() {
    this.resultado = 0;
  }

  // Função para somar dois números e verificar se o resultado é positivo ou negativo
  somar(numero1, numero2) {
    this.resultado = numero1 + numero2;
    if (this.resultado >= 0) {
      return `A soma é positiva: ${this.resultado}`;
    } else {
      return `A soma é negativa: ${this.resultado}`;
    }
  }

  // Função para subtrair dois números e verificar se o resultado é maior ou menor que 10
  subtrair(numero1, numero2) {
    this.resultado = numero1 - numero2;
    if (this.resultado > 10) {
      return `A subtração é maior que 10: ${this.resultado}`;
    } else {
      return `A subtração é menor ou igual a 10: ${this.resultado}`;
    }
  }

  // Função para multiplicar dois números
  multiplicar(numero1, numero2) {
    this.resultado = numero1 * numero2;
    return this.resultado;
  }

  // Função para dividir dois números
  dividir(numero1, numero2) {
    if (numero2 === 0) {
      return "Erro: Divisão por zero!";
    }
    this.resultado = numero1 / numero2;
    return this.resultado;
  }
}

// Exemplo de uso da classe Calculadora
const minhaCalculadora = new Calculadora();

console.log(minhaCalculadora.somar(5, 3)); // Resultado: A soma é positiva: 8
console.log(minhaCalculadora.subtrair(20, 4)); // Resultado: A subtração é maior que 10: 16
console.log(minhaCalculadora.multiplicar(2, 6)); // Resultado: 12
console.log(minhaCalculadora.dividir(8, 2)); // Resultado: 4
console.log(minhaCalculadora.dividir(6, 0)); // Resultado: Erro: Divisão por zero!
