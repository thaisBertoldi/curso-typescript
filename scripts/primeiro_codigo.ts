console.log("Hello World! Este é meu primeiro código em TypeScript");

console.log("===========");

const nome = "João";

console.log("Olá, " + nome + ". Seja bem-vindo");

console.log("===========");

class Produto {

    nome: string;
    valor: number;

    constructor(produtoNome: string, produtoValor:number) {

        this.nome = produtoNome;
        this.valor = produtoValor;
        
    }
}