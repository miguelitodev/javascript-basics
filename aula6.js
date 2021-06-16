console.log(`Trabalhando com listas`);

const salvador = `Salvador`;
const saoPaulo = `São paulo`;
const rioDeJaneiro = `Rio de janeiro`;
console.log(`\nDestinos possíveis`);
console.log(salvador, saoPaulo, rioDeJaneiro);

const listaDeDestinos = new Array(`Salvador`, `São paulo`, `Rio de janeiro`);
listaDeDestinos.push(`Curitiba`); // add items na lista
console.log(`\nDestinos possíveis`);
console.log(listaDeDestinos);

listaDeDestinos.splice(1, 1);
console.log(listaDeDestinos);
console.log(listaDeDestinos[1]);
