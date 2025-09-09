//Multiplicacao
class Multiplicacao {
    numeroSeis: number;
    numeroOito: number;

    constructor (numero6: number, numero8: number) {
        this.numeroSeis = numero6;
        this.numeroOito = numero8;
    }

    multiplica(): number {
        return this.numeroSeis * this.numeroOito;
    }
}
const conta = new Multiplicacao(6, 8);
console.log(conta.multiplica())

//Nome

class Nome {
    nome: string;

    constructor(nome: string) {
        this.nome = nome
    }
    dizOla(): string {
        return `Ola ${this.nome}`
    }
}
const DizNome = new Nome ('Raphael');
console.log(DizNome.dizOla())