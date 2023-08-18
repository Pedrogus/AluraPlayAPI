import { conectaApi } from "./conectaAPI.js";
import constroiCard from "./mostrarVideo.js";

async function buscaVideos(evento) {
    evento.preventDefault();
    const dadosBusca = document.querySelector("[data-pesquisa]").value;
    const busca = await conectaApi.buscaVideos(dadosBusca);
    
    //console.log(busca)
    const lista = document.querySelector("[data-lista]")

    while(lista.firstChild) {
        lista.removeChild(lista.firstChild)
    }

    busca.forEach(elemento => lista.appendChild(constroiCard
        (elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)));

    if(busca.length == 0) {
        lista.innerHTML = `<h2 class="mensagem__titulo"> Esse Termo não existe</h2>`
    }
}

const botaoPesquisa = document.querySelector("[data-botao-pesquisa]")

botaoPesquisa.addEventListener("click", evento => buscaVideos(evento))