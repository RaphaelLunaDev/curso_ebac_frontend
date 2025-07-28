function Treinador(nome) {
    this.nome = nome;
}

function Pokemon(nome, tipo, vantagem, desvantagem) {
    this.nome = nome;
    // let _tipo = tipo;
    // this.getTipo = function() {     //get de "getter"   que pega o valor
    //     return `O tipo do ${this.nome} é ${_tipo}`;                       //desta forma se aplica um atributo privado (atravaes de uma função)
    // }
    // this.setTipo = function(valor){      // set de "setters" que seta o valor que foi pego
    //     _tipo = valor;                      //desta forma se aplica um atributo privado (atraves de uma função)
    // } 
        this.tipo = tipo;
        this.vantagem = vantagem;
        this.desvantagem = desvantagem
        
    }
    const treinador1 = new Treinador("Ash")
    const pokemon1 = new Pokemon ("Dragonite", "dragon", "dragon", "dragon, fary and ice");
    const pokemon2 = new Pokemon ("Gengar", "ghost and poison", "ghost, phychic, fary and grass", "ghost, dark, ground and phychic");
    const pokemon3 = new Pokemon ("Squirtle", "Water", "fire, ground and rock", "elctr and grass");
    // pokemon1.setTipo("dragão")              //desta forma se aplica um atributo privado (atraves de uma função)
    console.log(treinador1);
    console.log(pokemon1);
    console.log(pokemon2);
    console.log(pokemon3);