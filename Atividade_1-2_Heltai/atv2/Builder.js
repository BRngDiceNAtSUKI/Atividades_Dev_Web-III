// Classe principal
class Pessoa {
    constructor(nome, funcao, matricula, horaEntrada, horaSaida) {
        this.nome = nome;
        this.funcao = funcao;
        this.matricula = matricula;
        this.horaEntrada = horaEntrada;
        this.horaSaida = horaSaida;
    }

    mostrar() {
        console.log("INFORMAÇÕES PESSOA");
        console.log("------------------");
        console.log("Nome:", this.nome);
        console.log("Função:", this.funcao);
        console.log("Matrícula:", this.matricula);
        console.log("Hora Entrada:", this.horaEntrada);
        console.log("Hora Saída:", this.horaSaida);
        console.log();
    }
}

// Builder
class PessoaBuilder {
    constructor() {
        this.nome = null;
        this.funcao = null;
        this.matricula = null;
        this.horaEntrada = null;
        this.horaSaida = null;
    }

    addNome(nome) { this.nome = nome; return this; }
    addFuncao(funcao) { this.funcao = funcao; return this; }
    addMatricula(matricula) { this.matricula = matricula; return this; }
    addHoraEntrada(horaEntrada) { this.horaEntrada = horaEntrada; return this; }
    addHoraSaida(horaSaida) { this.horaSaida = horaSaida; return this; }

    construir() {
        return new Pessoa(this.nome, this.funcao, this.matricula, this.horaEntrada, this.horaSaida);
    }
}

// Cliente
const aluno = new PessoaBuilder()
    .addNome("Gabriel")
    .addFuncao("Aluno")
    .addMatricula("A123")
    .addHoraEntrada("07:30")
    .addHoraSaida("12:00")
    .construir();

const professor = new PessoaBuilder()
    .addNome("Vinicius")
    .addFuncao("Professor")
    .addMatricula("P456")
    .addHoraEntrada("08:00")
    .addHoraSaida("11:30")
    .construir();

const administrativo = new PessoaBuilder()
    .addNome("Andrea")
    .addFuncao("Administrativo")
    .addMatricula("ADM789")
    .addHoraEntrada("09:00")
    .addHoraSaida("17:00")
    .construir();

const publico = new PessoaBuilder()
    .addNome("Charles")
    .addFuncao("Visitante")
    .addMatricula("VIS001")
    .addHoraEntrada("10:00")
    .addHoraSaida("11:00")
    .construir();

const pessoas = [aluno, professor, administrativo, publico];
pessoas.forEach(p => p.mostrar());
