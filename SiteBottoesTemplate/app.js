let titulo = document.querySelector('h1');
titulo.innerHTML = "Hora do Desafio";

let cliques = 0;

function verificarClique(){
    cliques++;
    console.log("O botão foi clicado");
    alert(`Clicaram no botão. Ele foi clicado ${cliques} vezes`);
}

function verificarAlerta(){
    console.log("Eu amo JS!");
    alert(`Eu amo JS!.`);
}

function verificarPrompt(){
    let cidade = prompt("Me fale o nome de uma cidade no brasil.");
    alert(`Estive em ${cidade} e me lembrei de você.`);
}

function verificarSoma(){
    let numeroUm = prompt("Diga um número para a soma.");
    alert(`O primeiro número foi: ${numeroUm}`);
    let numeroDois = prompt("Diga um segundo número para a soma.");
    alert(`O segundo numero foi: ${numeroDois} `);

    //Converter strings para números com parseInt
    numeroUm = parseInt(numeroUm);
    numeroDois = parseInt(numeroDois);
    if (!isNaN(numeroUm) && !isNaN(numeroDois)) {
        let numeroTotal = numeroUm + numeroDois;
        alert(`O número total resultou em ${numeroTotal}`);
    } else {
        alert("Parou a brincadeira, bota numero certinho.")
    }
}