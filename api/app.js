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

        if (nome.includes(termoPesquisa)) {
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

            if (window.matchMedia("(max-width: 480px), (max-height: 882px)").matches) {
                resposta.style.left = "10vw";  // Para telas menores
            } else {
                resposta.style.left = "25vw"; // Para telas maiores
            }
        }
    }

    if (!encontrou) {
        alert("Nenhum filósofo foi encontrado");
    }
}

const limiteNome = 30;
const nomeInput = document.getElementById("termo-pesquisa");
const contadorNome = document.getElementById("contador-nome");

function atualizarContadorN(input, contador, limite) {
    const comprimentoN = input.value.length;
    contador.textContent = `${comprimentoN}/${limite}`;

    if (comprimentoN >= limite) {
        contador.className = "contadorLimiteN";
    } else {
        contador.className = "contadorNormalN";
    }
}

nomeInput.addEventListener("input", () => {
    atualizarContadorN(nomeInput, contadorNome, limiteNome);
});

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("botao-pesquisa").addEventListener("click", pesquisar);
    document.getElementById("termo-pesquisa").addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            pesquisar();
        }
    });
    document.getElementById("limpa-pesquisa").addEventListener("click", limpar);
})

function limpar() {
    let resposta = document.getElementById("resultados-pesquisa");
    let termo = document.getElementById("termo-pesquisa").value = "";

    resposta.innerHTML = ""; 
    resposta.style.left = '-100vw';

    contadorNome.textContent = `0/${limiteNome}`;
    contadorNome.className = "contadorNormalN";
}
