//  OBJECT DISTRUCTURING

const person = {
  name: "Andrew",
  age: 26,
  location: {
    city: "Philadelphia",
    temp: 50,
  },
};

// this line below creates two variables from the obj person which we defined above
const { name, age } = person;

console.log(`${name} is ${age}`);

// example of RENAMING syntax in destructuring and DEFAULT value -> city = 'Rome' || Both at the same time -> name: firstName = 'Marco'
const { temp: temperatura, city = "Rome" } = person.location;

if (city && temperatura) {
  console.log(`It's ${temperatura} in ${city}`);
}

/**
 * 
    const book = {
        title: "Ego is the Enemy",
        author: "Ryan Holiday",
        publisher: {
            name: "Penguin",
            },
        };
    
    const { name: publisherName = "Self-Published" } = book.publisher;
    
    console.log(publisherName); // Penguin, default: Self-Published
*/

//  ARRAY DISTRUCTURING
const address = [
  "12999 S Juniper Street",
  "Philadeplphia",
  "Pennsylvania",
  "19221",
];

// Qui di seguito creiamo un sacco di variabili velocemente e js le definisce in base alla posizione all'interno dell'array a cui lo linkiamo (in questo caso address)
// const [street, citi, state, zip] = address;

// se ad esempio vogliamo solo city e state (quindi nell'array saltiamo il primo e l'ultimo valore, scriviamo così):
// la virgola per far saltare un valore e poi quelli successivi ai valori che ci salviamo ignorarli
const [, citi, state] = address;

console.log(`You are in ${citi} ${state}`);

const item = ["Coffee (hot)", "$2.00", "$2.50", "$2.75"];

// Let's save data
const [product, , mediumPrice] = item;

console.log(`A medium ${product} costs ${mediumPrice}`);

/* OBJECT DESTRUCTURING IN A FUNCTION */
const add = ({ a, b }, c) => a + b + c;

console.log(add({ a: 1, b: 12 }, 100)); /* -> Il risultato sarà 113 */
