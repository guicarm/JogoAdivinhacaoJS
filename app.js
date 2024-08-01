alert('Bem-Vindo ao jogo do número secreto!');

let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(`O número secreto é ${numeroSecreto}`);

let chute;
console.log(`O chute do usuário foi ${chute}`);

let tentativas = 1;

while (chute != numeroSecreto){
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}.`);
    // Se o chute do usuário for IGUAL ao número secreto
    if (chute == numeroSecreto){
        break;
    // Se o chute do usuário for DIFERENTE ao número secreto
    } else {
        if (chute > numeroSecreto){
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        //tentativas = tentativas + 1;
        tentativas++;
        console.log(`O chute foi ${chute}, mas o número secreto era ${numeroSecreto}`);
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
alert(`Isso ai! Você acertou o número secreto: ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);

// if (tentativas > 1) {
//     alert(`Isso ai! Você acertou o número secreto: ${numeroSecreto} com ${tentativas} tentativas.`);
// } else {
//     alert(`Isso ai! Você acertou o número secreto: ${numeroSecreto} com ${tentativas} tentativa.`);
// }