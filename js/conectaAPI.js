async function listaVideos() {
    const conexa = await fetch("http://localhost:3000/videos")
    const conexaConvertida = await conexa.json()
  
    return conexaConvertida;
}

async function criaVideo(titulo, descricao, url, imagem) {
    const conexao = await fetch("http://localhost:3000/videos", {
        method: "POST", 
        headers: {
            "content-type": "aplication/json"
        },
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil visualizações`,
            url: url,
            imagem: imagem
        })
    })

    if(!conexao.ok) {
            throw new Error("Não foi possivel mandar o video")
    }
    const conexaConvertida = await conexao.json()
    return conexaConvertida

}

async function buscaVideos(termoDeBusca) {
    const conexao = await fetch(`http://localhost:3000/videos?q=${termoDeBusca}`)
    const conexaoConvertida = conexao.json()

    return conexaoConvertida
}

export const conectaApi = {
    listaVideos,
    criaVideo,
    buscaVideos
}