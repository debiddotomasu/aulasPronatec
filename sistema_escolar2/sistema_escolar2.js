
let aluno = {
    nome: '',
    serie: '',
    idade: 0,
    turno: '',
    notas: {
        s1: null,
        s2: null,
        s3: null,
        s4: null
    },
    frequencia: {
        s1: null,
        s2: null,
        s3: null,
        s4: null
    }
};

// Função para registrar dados do aluno
function registrarAluno() {
    aluno.nome = prompt("Digite o nome do aluno:");

    let opcoesSerie = "Escolha a série do aluno:\n1- 1º ano\n2- 2º ano\n3- 3º ano\n4- 4º ano\n5- 5º ano\n6- 6º ano\n7- 7º ano\n8- 8º ano\n9- 9º ano";
    let serieEscolhida = prompt(opcoesSerie);
    aluno.serie = `${serieEscolhida}º ano`;

    aluno.idade = Number(prompt("Digite a idade do aluno:"));
    aluno.turno = prompt("Digite o turno (manhã ou tarde):");
}

// Função para registrar notas por semestre
function registrarNotas() {
    let opcao = prompt("Registrar notas:\n1 - 1º semestre\n2 - 2º semestre\n3 - 3º semestre\n4 - 4º semestre\n5 - Exibir boletim");

    if (opcao === '1') {
        aluno.notas.s1 = parseFloat(prompt("Nota do 1º semestre:"));
    } else if (opcao === '2') {
        aluno.notas.s2 = parseFloat(prompt("Nota do 2º semestre:"));
    } else if (opcao === '3') {
        aluno.notas.s3 = parseFloat(prompt("Nota do 3º semestre:"));
    } else if (opcao === '4') {
        aluno.notas.s4 = parseFloat(prompt("Nota do 4º semestre:"));
    } else if (opcao === '5') {
        exibirBoletim();
    } else {
        alert("Opção inválida.");
    }
}

// Função para registrar frequência por semestre
function registrarFrequencia() {
    let opcao = prompt("Registrar frequência:\n1 - 1º semestre\n2 - 2º semestre\n3 - 3º semestre\n4 - 4º semestre");

    if (opcao === '1') {
        aluno.frequencia.s1 = Number(prompt("Frequência do 1º semestre (até 25):"));
    } else if (opcao === '2') {
        aluno.frequencia.s2 = Number(prompt("Frequência do 2º semestre (até 25):"));
    } else if (opcao === '3') {
        aluno.frequencia.s3 = Number(prompt("Frequência do 3º semestre (até 25):"));
    } else if (opcao === '4') {
        aluno.frequencia.s4 = Number(prompt("Frequência do 4º semestre (até 25):"));
    } else {
        alert("Opção inválida.");
    }
}

// Calcular média e situação do aluno
function calcularMediaSituacao() {
    let soma = 0;
    let count = 0;
    for (let key in aluno.notas) {
        if (aluno.notas[key] !== null) {
            soma += aluno.notas[key];
            count++;
        }
    }

    if (count === 4) {
        let media = soma / 4;
        let situacao = media >= 6 ? "APROVADO" : "REPROVADO";
        alert("Média Final: " + media.toFixed(2) + "\nSituação: " + situacao);
        console.log("Média Final:", media.toFixed(2));
        console.log("Situação:", situacao);
    } else {
        alert("Notas incompletas.");
    }
}

// Exibir boletim completo
function exibirBoletim() {
    let faltando = [];

    for (let key in aluno.notas) {
        if (aluno.notas[key] === null) {
            faltando.push(key.toUpperCase());
        }
    }

    let mensagem = "BOLETIM DO ALUNO\n";
    mensagem += "Nome: " + aluno.nome + "\n";
    mensagem += "Série: " + aluno.serie + "\n";
    mensagem += "Turno: " + aluno.turno + "\n";

    for (let i = 1; i <= 4; i++) {
        let key = 's' + i;
        mensagem += "Nota " + i + "º semestre: ";
        mensagem += aluno.notas[key] !== null ? aluno.notas[key] + "\n" : "FALTANDO\n";
    }

    if (faltando.length === 0) {
        mensagem += "Todas as notas foram inseridas.\n";
    } else {
        mensagem += "Semestres faltando: " + faltando.join(", ") + "\n";
    }

    alert(mensagem);
    console.log(mensagem);
}

// Exibir frequência
function exibirFrequencia() {
    let opcao = prompt("Exibir frequência:\n1 - 1º semestre\n2 - 2º semestre\n3 - 3º semestre\n4 - 4º semestre\n5 - Todos os semestres");

    let totalFreq = 0;
    let totalEsperado = 0;

    if (opcao >= '1' && opcao <= '4') {
        let key = 's' + opcao;
        alert("Frequência do " + opcao + "º semestre: " + (aluno.frequencia[key] ?? "Não registrada"));
    } else if (opcao === '5') {
        let texto = "Frequência por semestre:\n";
        for (let i = 1; i <= 4; i++) {
            let key = 's' + i;
            let freq = aluno.frequencia[key];
            texto += i + "º semestre: " + (freq !== null ? freq : "Não registrada") + "\n";
            if (freq !== null) totalFreq += freq;
            totalEsperado += 25;
        }
        texto += "Total: " + totalFreq + "/" + totalEsperado;
        alert(texto);
    } else {
        alert("Opção inválida.");
    }
}

// MENU PRINCIPAL
function menu() {
    let opcao = prompt("MENU ESCOLAR\n1 - Registrar Aluno\n2 - Registrar Notas\n3 - Registrar Frequência\n4 - Calcular Média e Situação\n5 - Exibir Boletim\n6 - Exibir Frequência\n7 - Sair");

    if (opcao === '1') {
        registrarAluno();
    } else if (opcao === '2') {
        registrarNotas();
    } else if (opcao === '3') {
        registrarFrequencia();
    } else if (opcao === '4') {
        calcularMediaSituacao();
    } else if (opcao === '5') {
        exibirBoletim();
    } else if (opcao === '6') {
        exibirFrequencia();
    } else if (opcao === '7') {
        alert("Saindo do sistema.");
        return;
    } else {
        alert("Opção inválida.");
    }

    menu();
}

// Iniciar o sistema
menu();
