// Jogo do Numero Secreto, como passado no curso Alura.
let numeroSecreto = parseInt(Math.random() * 100 + 1);
let tentativas = 1;
let chute

alert(`Boas Vindas ao jogo do Número Secreto!`);

while (chute != numeroSecreto) {
let chute = prompt('Escolha um número entre 1 e 100')
if (chute == numeroSecreto) {
break
} else {
//é possível colocar outro if dentro do else.
if (chute > numeroSecreto) {
alert(`O número secreto é menor que ${chute}`)
} else {
 alert(`O número secreto é maior que ${chute}`)
}
}
//aumenta o numero de tentativas para cada erro.
tentativas++
}
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa' 
alert(`O número secreto era ${numeroSecreto} e você acertou com apenas ${tentativas} ${palavraTentativa}`)
