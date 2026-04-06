let dataAtual = new Date();

let dia = dataAtual.getDate();
let mes = dataAtual.getMonth() + 1;
let ano = dataAtual.getFullYear();
let horas = dataAtual.getHours();
let minutos = dataAtual.getMinutes();
let segundos = dataAtual.getSeconds();

let formatador = new Intl.DateTimeFormat('pt-BR', {
    dateStyle: 'full',
    timeStyle: 'short'

});

console.log(formatador.format(dataAtual));

console.log(`${dia < 10 ? `0${dia}`: dia}/${mes < 10 ? `0${mes}`: mes}/${ano < 10 ? `0${ano}`: ano} ${horas < 10 ? `0${horas}`: horas}:${minutos < 10 ? `0${minutos}`: minutos}:${segundos < 10 ? `0${segundos}`: segundos}`);