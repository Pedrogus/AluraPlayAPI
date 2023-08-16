async function listaVideos() {
    const conexa = await fetch("http://localhost:3000/videos")
    const conexaConvertida = await conexa.json()
  
    return conexaConvertida;
}

export const conectaApi = {
    listaVideos
} 