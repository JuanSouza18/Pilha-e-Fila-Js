class Pilha {
    constructor(tamanho) {
        this.itens = [];
        this.tamanho = tamanho;
    }

    push(elemento) {
        if (this.itens.length < this.tamanho) {
            this.itens.push(elemento);
        } else {
            throw new Error("Pilha cheia!");
        }
    }

    pop() {
        if (this.itens.length > 0) {
            return this.itens.pop();
        } else {
            throw new Error("Pilha vazia!");
        }
    }

    peek() {
        return this.itens[this.itens.length - 1];
    }

    isEmpty() {
        return this.itens.length === 0;
    }

    size() {
        return this.itens.length;
    }
}

// Pilha principal com tamanho 3
const pilhaPrincipal = new Pilha(3);

// Três pilhas auxiliares com tamanho 10
const pilha1 = new Pilha(10);
const pilha2 = new Pilha(10);
const pilha3 = new Pilha(10);

// Inserir as pilhas auxiliares na pilha principal
try {
    pilhaPrincipal.push(pilha1);
    pilhaPrincipal.push(pilha2);
    pilhaPrincipal.push(pilha3);
} catch (error) {
    console.log(error.message);
}

// Inserir 3 nomes de alunos na primeira pilha
try {
    pilha1.push("Aluno 1");
    pilha1.push("Aluno 2");
    pilha1.push("Aluno 3");
} catch (error) {
    console.log(error.message);
}

// Inserir 5 nomes de alunos na segunda pilha
try {
    pilha2.push("Aluno 4");
    pilha2.push("Aluno 5");
    pilha2.push("Aluno 6");
    pilha2.push("Aluno 7");
    pilha2.push("Aluno 8");
} catch (error) {
    console.log(error.message);
}

// Inserir 10 nomes de alunos na terceira pilha
try {
    pilha3.push("Aluno 9");
    pilha3.push("Aluno 10");
    pilha3.push("Aluno 11");
    pilha3.push("Aluno 12");
    pilha3.push("Aluno 13");
    pilha3.push("Aluno 14");
    pilha3.push("Aluno 15");
    pilha3.push("Aluno 16");
    pilha3.push("Aluno 17");
    pilha3.push("Aluno 18");
} catch (error) {
    console.log(error.message);
}

// Função para esvaziar e imprimir os elementos de uma pilha
function esvaziarPilha(pilha) {
    while (!pilha.isEmpty()) {
        try {
            console.log(pilha.pop());
        } catch (error) {
            console.log(error.message);
        }
    }
}

// Esvaziar e imprimir as pilhas na ordem de prioridade
console.log("Retirando alunos da primeira pilha:");
esvaziarPilha(pilha1);

console.log("Retirando alunos da segunda pilha:");
esvaziarPilha(pilha2);

console.log("Retirando alunos da terceira pilha:");
esvaziarPilha(pilha3);
