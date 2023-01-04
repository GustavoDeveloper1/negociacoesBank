import { Negociacao } from "./negociacao";

export class Negociacoes {
    private negociacoes: Negociacao[] = [];


    adicionaNegociacoes(negociacao: Negociacao) {

        this.negociacoes.push(negociacao);
        console.log(this.negociacoes)

    }

    listaNegociacoes(): readonly Negociacao[] {
        return this.negociacoes;

    }

}

