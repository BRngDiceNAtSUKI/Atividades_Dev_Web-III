// Classe base
class Pessoa {
    constructor(nome, cargo) {
        this.nome = nome;
        this.cargo = cargo;
    }

    mostrar() {
        console.log("INFORMAÇÕES PESSOA");
        console.log("------------------");
        console.log("Nome:", this.nome);
        console.log("Cargo:", this.cargo);
        console.log();
    }
}

// Subclasses
class Aluno extends Pessoa {}
class Professor extends Pessoa {}
class Administrativo extends Pessoa {}
class Publico extends Pessoa {}

// Fábrica base
class FabricaPessoas {
    criarPessoa(nome, cargo) {
        throw new Error("Método criarPessoa deve ser implementado!");
    }
}

// Fábricas concretas
class FabricaAluno extends FabricaPessoas {
    criarPessoa(nome, cargo) {
        return new Aluno(nome, cargo);
    }
}
class FabricaProfessor extends FabricaPessoas {
    criarPessoa(nome, cargo) {
        return new Professor(nome, cargo);
    }
}
class FabricaAdministrativo extends FabricaPessoas {
    criarPessoa(nome, cargo) {
        return new Administrativo(nome, cargo);
    }
}
class FabricaPublico extends FabricaPessoas {
    criarPessoa(nome, cargo) {
        return new Publico(nome, cargo);
    }
}

// Cliente
const fabricaAluno = new FabricaAluno();
const fabricaProfessor = new FabricaProfessor();
const fabricaAdministrativo = new FabricaAdministrativo();
const fabricaPublico = new FabricaPublico();

const pessoas = [
    fabricaAluno.criarPessoa("Gabriel", "Aluno"),
    fabricaProfessor.criarPessoa("Vinicius", "Professor"),
    fabricaAdministrativo.criarPessoa("Andrea", "Administrativo"),
    fabricaPublico.criarPessoa("Charles", "Visitante")
];

pessoas.forEach(p => p.mostrar());
