const nome = "Marcio Schreiber";
let nome2 = "";
let pessoaDefault = {
    nome: "Marcio Schreiber",
    idade: "33",
    profissão: "Programador"
}

let nomes = ["Marcio Schreiber", "José Pereira", "Maria Silva"];
let pessoas = [
    {
    nome: "Marcio Schreiber",
    idade: "33",
    profissão: "Programador"
    },
    {
    nome: "Ricardo José",
    idade: "29",
    profissão: "Jogador de futebol"
    }
];

//console.log(pessoas);

//function AdicionarPessoa(pessoa) {
    //pessoas.push(pessoa);
//}

function ImprimirPessoas(){
    pessoas.forEach((item) => {
        console.log("Nome: ")
        console.log(item.nome);

        console.log("idade: ")
        console.log(item.idade);

        console.log("Profissão: ")
        console.log(item.profissão);

        console.log(item);
    })
}

ImprimirPessoas();

AdicionarPessoa({
    nome: "Pedro Silva",
    idade: "28",
    profissão: "porteiro"
});

ImprimirPessoas();

//console.log(pessoas);

/*console.log("Valor inicial: ");
console.log(nome2);

nome2 = "Pedro Silva";

console.log("Valor alterado: ");
console.log(nome2);

console.log(nomes);*/

/*function AlteraNome() {
    nome2 = "Maria Silva";
    console.log("Valor alterado: ");
    console.log(nome2);
}

function Recebe_e_Altera_Nome(novoNome){
    nome2 = novoNome;
    console.log("Valor alterado recebendo um nome");
    console.log(nome2);
}

function ImprimePessoa(){
console.log(pessoa);
console.log("Nome: ")
console.log(pessoa.nome);

console.log("idade: ")
console.log(pessoa.idade);

console.log("Profissão: ")
console.log(pessoa.profissão);
}

ImprimePessoa(pessoaDefault);

ImprimePessoa({
    nome = "Maria Silva",
    idade = "25",
    profissão = "Advogada"
});*/


//Recebe_e_Altera_Nome("João Silva Pereira");
//AlteraNome();