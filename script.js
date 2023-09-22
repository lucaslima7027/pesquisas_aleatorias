async function rndWord() {
    const response = await fetch("https://api.dicionario-aberto.net/random");
    const dicionario = await response.json();
    return dicionario.word;
  }



function openTab() {

    for (let index = 0; index < 10; index++) {
        rndWord().then((result) => {
            var link = "https://www.bing.com/search?q="+result
            window.open(link, "_blank");
        });
        
    }
}