async function palavraAleatoria() {
    const resposta = await fetch("https://api.dicionario-aberto.net/random");
    const dicionario = await resposta.json();
    return dicionario.word;
  }



function abreAbas() {

    for (let index = 0; index < 10; index++) {
        palavraAleatoria().then((result) => {
            var link = `https://www.bing.com/search?q=${result}&form=ANSPH1&refig=f841cb20db31406bb46822c319837104&pc=U531`
            window.open(link, "_blank");
        });
        
    }
}