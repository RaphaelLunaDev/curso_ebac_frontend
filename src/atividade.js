//Multiplicacao
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
var conta = new Multiplicacao(6, 8);
console.log(conta.multiplica());
//Nome
var Nome = /** @class */ (function () {
    function Nome(nome) {
        this.nome = nome;
    }
    Nome.prototype.dizOla = function () {
        return "Ola ".concat(this.nome);
    };
    return Nome;
}());
var DizNome = new Nome('Raphael');
console.log(DizNome.dizOla());
