export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adicionaNegociacoes(negociacao) {
        this.negociacoes.push(negociacao);
        console.log(this.negociacoes);
    }
    listaNegociacoes() {
        return this.negociacoes;
    }
}
