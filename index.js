// Primeiro Desafio de Lógica de Programação DIO
// NIVEL DE HÉROI

// Desafio:

// Criar uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói e depois utilizar
// uma estrutura de decisão para apresentar os níveis de experiência do herói.
// Os níveis de experiência são: Ferro, Bronze, Prata, Ouro, Platina, Ascendente, Imortal e Radiante.
// A quantidade de XP necessária para cada nível é:	
// Ferro: 0 a 1000
// Bronze: 1001 a 2000	
// Prata: 2001 a 5000
// Ouro: 5001 a 7000
// Platina: 7001 a 8000
// Ascendente: 8001 a 9000
// Imortal: 9001 a 10000
// Radiante: acima de 10000


//Resolução do Desafio:
// Criando uma variável para armazenar o nome do herói e a quantidade de experiência (XP)
let nomeHeroi = "Capitão Manuel Gomes";
let experienciaHeroi = 200;


// Utilizando uma estrutura de decisão para apresentar os níveis de experiência do herói
if (experienciaHeroi < 1000){
	console.log ("O héroi " + nomeHeroi + " está no nível de " + "Ferro")}    // Utilizo concatenação para exibir o nome do herói e o nível de experiência
else if (experienciaHeroi >=1001 && experienciaHeroi <= 2000){
	console.log ("O héroi " + nomeHeroi + " está no nível de " + "Bronze")}
else if (experienciaHeroi >=2001 && experienciaHeroi <=5000){   // Utilizo o operador lógico "&&" para verificar se a experiência do herói está dentro do intervalo de 2001 a 5000
	console.log ("O héroi " + nomeHeroi + " está no nível de " + "Prata")}
else if (experienciaHeroi >=5001 && experienciaHeroi <=7000){
	console.log ("O héroi " + nomeHeroi + " está no nível de " + "Ouro")}
else if (experienciaHeroi >=7001 && experienciaHeroi <=8000){
	console.log ("O héroi " + nomeHeroi + " está no nível de " + "Platina")}
else if (experienciaHeroi >=8001 && experienciaHeroi <=9000){
	console.log ("O héroi " + nomeHeroi + " está no nível de " + "Ascendente")}
else if (experienciaHeroi >=9001 && experienciaHeroi <=10000){
	console.log ("O héroi " + nomeHeroi + " está no nível de " + "Imortal")}
else{
    console.log ("O héroi " + nomeHeroi + " está no nível de " + "Radiante")}

// Utilizei a estrutura de decisão if-else para verificar a quantidade de experiência do herói e determinar o nível correspondente.
// A mensagem final é exibida no console com o nome do herói e o nível de experiência alcançado.

