const names = ["Andrew", "Steve"];

[
  ...names,
  "Giuseppe",
]; /* così aggiungiamo un nome all'interno di quest'array ma non modifichiamo l'array names */

["Giuseppe", ...names, "Mike"];
/* Qui avremo tutti e 4 i nomi, ma names avrà solo  */
// console.log(names);

/* OBJECT SPREAD OPERATOR */
const user = {
  name: "Jen",
  age: 24,
};

console.log({
  ...user,
  location: "phila",
  age: 25,
}); /* -> {name: "Jen", age: 25, location: "phila"} */
