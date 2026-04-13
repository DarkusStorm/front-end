const carros = ["Fusca", "Corola", "Gol", "Palio", "Chevette", "Opala"];
console.log(carros); // Exibe todos os valores;
console.log(carros[2]); // Exibe o terceiro item do array;
console.log(typeof carros);

for(i = 0; i < 6; i++){
    console.log(carros[i]);
}

carros.forEach((valor) => console.log(valor));
const numeros = [45, 4, 9, 16, 25];
const acimaDe18 = numeros.filter(valor => valor > 18);