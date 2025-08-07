function Trainer(nome) {
    this.nome = nome;           //atributo publico (this)
    this.dizEEV = function() {
        console.log(this.nome + " diz : Eu escolho você")
    }
}

function Pokemon(nome, tipo, vantagem, desvantagem, evolucao) {
    this.nome = nome
    this.tipo = tipo;
    this.vantagem = vantagem;
    this.desvantagem = desvantagem;
    this.evolucao = evolucao;
}

function Forma(nome, tipo, vantagem, desvantagem, evolucao){

    let _vantagem = vantagem;                  //desta forma se aplica um atributo privado (atravaes de uma função)

    this.getVantagem = function() {     //get de "getter"   que pega o valor
        return `A vantagem do ${this.nome} é ${_vantagem}`;
    }
    
    this.setVantagem = function(valor) {        // set de "setters" que seta o valor que foi pego
    _vantagem = valor
    }

    let _desvantagem = desvantagem;                  //desta forma se aplica um atributo privado (atravaes de uma contante/função)

    this.getDesvantagem = function() {     //get de "getter"   que pega o valor
        return `A desvantagem do ${this.nome} é ${this.desvantagem}`;
    }
    
    this.setDesvantagem = function(valor) {        // set de "setters" que seta o valor que foi pego
    _desvantagem = valor
    }
    
    let _evolucao = evolucao;

    this.getEvolucao = function() {     //get de "getter"   que pega o valor
    return _evolucao;
    }
    
    this.setEvolucao = function(valor) {        // set de "setters" que seta o valor que foi pego
    _evolucao = valor;
    }

    this.newForm = function() {
        const novaEvolucao = _evolucao;
        _evolucao = novaEvolucao;
    }

    Pokemon.call(this, nome, tipo, vantagem, desvantagem, evolucao);
}
    function Evolucao(nome) {
        Forma.call(this, nome, "Dragão","Dragão","ice, fary and dragon", "Dragoniteee")     //uso do call para pegar as funçoes do `Forma`

            this.newForm = function() {
        const novaEvolucao = "Dragonite"
        this.setEvolucao(novaEvolucao)
    }
}
    
    const treinador1 = new Trainer("Ash");
    const forma1 = new Forma ("Dratine", "dragon","dragon","fary, ice and dragon", "Dragonair")
    const forma2 = new Evolucao("Dragonair")
    const pokemon2 = new Forma ("Gengar", "ghost and poison", "ghost, phychic, fary and grass", "ghost, dark, ground and phychic", "hunter");

    treinador1.dizEEV();    //frase do ash
    
    console.log(forma1);           //console principal
    console.log(forma2);           //console principal
    console.log(pokemon2);          //console principal

    forma1.newForm();
    console.log(forma1.getEvolucao())       //diz evolução

    forma2.newForm();
    console.log(forma2.getEvolucao())        //diz evolução

              //vantagens e desvantagens de pokemons

    console.log(forma1.getVantagem())             
    console.log(forma1.getDesvantagem())


    console.log(pokemon2.getVantagem())
    console.log(pokemon2.getDesvantagem())
