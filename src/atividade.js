var Multiplicacao = /** @class */ (function () {
    function Multiplicacao(numero6, numero8) {
        this.numeroSeis = numero6;
        this.numeroOito = numero8;
    }
    Multiplicacao.prototype.multiplica = function () {
        return this.numeroSeis * this.numeroOito;
    };
    return Multiplicacao;
}());
// Exemplo de uso:
var conta = new Multiplicacao(6, 8);
console.log(conta.multiplica()); // 48
