import { dados } from "./dados.js";

export function pesquisar() {
    let resposta = document.getElementById("resultados-pesquisa");
    let termoPesquisa = document.getElementById("termo-pesquisa").value.trim().toLowerCase();

    resposta.innerHTML = "";

    if (!termoPesquisa) {
        resposta.innerHTML = "<p>Por favor, digite o nome de um filósofo.</p>";
        return;
    }

    let encontrou = false;

    for (let dado of dados) {
        let nome = dado.nome.toLowerCase();
        let descricao = dado.descricao.toLowerCase();

        if (nome.includes(termoPesquisa) || descricao.includes(termoPesquisa)) {
            encontrou = true;

            let div = document.createElement("div");
            div.className = "item-resultado";

            let h2 = document.createElement("h2");
            h2.textContent = dado.nome;

            let p = document.createElement("p");
            p.textContent = dado.descricao;
            p.className = "descricao-meta";

            div.appendChild(h2);
            div.appendChild(p);

            resposta.appendChild(div);

            resposta.style.left = "25vw"
        }
    }

    if (!encontrou) {
        alert("Nenhum filosofo foi encontrado");
    }
}

const limiteNome = 25;
const nomeInput = document.getElementById('termo-pesquisa');
const contadorNome = document.getElementById('contador-nome');

function atualizarContadorN(input, contador, limite) {
    const comprimentoN = input.value.length;
    contador.textContent = `${comprimentoN}/${limite}`;

    if (comprimentoN >= limite) {
        contador.className ='contadorLimiteN';
    } else {
        contador.className = 'contadorNormalN';
    }
}

nomeInput.addEventListener('input', () => {
    atualizarContadorN(nomeInput, contadorNome, limiteNome);
});

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("botao-pesquisa").addEventListener("click", pesquisar);
});