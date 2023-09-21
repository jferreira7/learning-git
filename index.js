// Definindo uma classe chamada "Calculadora"
class Calculadora {
  // Construtor da classe
  constructor() {
    this.resultado = 0;
  }

  // Função para somar dois números
  somar(numero1, numero2) {
    this.resultado = numero1 + numero2;
    return this.resultado;
  }

  // Função para subtrair dois números
  subtrair(numero1, numero2) {
    this.resultado = numero1 - numero2;
    return this.resultado;
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

  potencia() {
    console.log("ponteciação");
  }
}

// Exemplo de uso da classe Calculadora
const minhaCalculadora = new Calculadora();

console.log(minhaCalculadora.somar(5, 3)); // Resultado: 8
console.log(minhaCalculadora.subtrair(10, 4)); // Resultado: 6
console.log(minhaCalculadora.multiplicar(2, 6)); // Resultado: 12
console.log(minhaCalculadora.dividir(8, 2)); // Resultado: 4
console.log(minhaCalculadora.dividir(6, 0)); // Resultado: Erro: Divisão por zero!
