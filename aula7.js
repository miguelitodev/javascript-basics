console.log(`Trabalhando com listas`);

const listaDeDestinos = new Array(`Salvador`, `São paulo`, `Rio de janeiro`);
const idade = 15;
const acompanhada = true;
let passagem = false;

if (idade >= 18 || acompanhada) {
  console.log("\nPode comprar");
  passagem = true;
} else {
  console.log("\nNão pode comprar");
}

console.log("\nEmbarcando..\n");

if (passagem) {
  console.log("Boa viagem");
} else {
  console.log("Sem passagem");
}

listaDeDestinos.splice(1, 1);
console.log(listaDeDestinos);
