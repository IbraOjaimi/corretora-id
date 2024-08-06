const prompt = require('prompt-sync')();

const db = [];

let ultimoId = 0;

function getIndice (id) {
        let indice = db.findIndex(el => el.id == id);
        if(indice != -1) {
            return indice
        } else {
            console.log('ID inexistente', indice);
        }
}

function model(id = ++ultimoId) {
    const nome = prompt('Digite o nome: ');
    if(nome != '') {
        return {
            id,
            nome
        }
    } else {
        console.log('Dados invalidos!');
        ultimoId--
    }


}

function mostrar(id) {
    const el = db.find(el => el.id == id);

    return el
}

function criar() {
    const novo = model()
    if(novo){
        db.push(novo);
        console.log('Registro criado com sucesso!');
    }
}

function listar() {
    if(db.length == 0) {
        console.log('Nenhum registro encontrado!');
        return false
    }

    db.forEach(el => console.log(el));
    return true;
}

function atualizar() {
        if(listar()){
        const id = prompt('Digite o ID: ');
        const indice = getIndice(id);
            if(indice != -1 ){
                const novo = model(id);
                    if(novo) {
                    db[indice] = novo
                    console.log('Atualizado com sucesso!');
                    }
            }
        }
    }



function remover() {
    if(listar()) {
        const id = prompt('Digite o ID: ');
        const indice = getIndice();
        if(indice != -1) {
            db.splice(indice, 1);
            console.log('Removido com sucesso!')
        }
    }
}

module.exports = {
    criar,
    listar,
    atualizar,
    remover,
    mostrar,
}