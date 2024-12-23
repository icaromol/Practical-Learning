/* Aula 1, 2 - Criando um objeto

// Cria um objeto.
const obj = {}
console.log(obj)
console.log(typeof obj)

// Objeto com propriedades e métodos.
const user = {
  email: "icaro@email.com",
  age: 18,
  name: {
    first_name: "Ícaro", // Em propriedades de objetos é comum o uso de snakecase ao invés de cammelcase
    surname: "Gonçalves",
  },
  adress: {
    street: "Rua Ita",
    number: 23,
    city: "São Paulo",
    postal_code: "30.200-300",
  },
  message: function () {
    console.log("Oi Ícaro")
  },
}

// Acessando propriedades e métodos usando a notação de ponto
console.log(user.adress.postal_code)

// Executa o método do objeto.
user.message()

// Notação de colchetes.
console.log(user["email"])
console.log(user["adress"]["number"])
user["message"]()

*/

/* Aula 3 -
const user = {
  name: "Ícaro",
  email: "icaro@email.com"
  message: function () {
    // console.log(`Olá ${user.name}`)
    console.log(`Olá ${this.name}`) // This não funciona com arrow function
  },
}

user.message()

*/

/* Aula 4 - Atualizando um objeto

const product = {
  name: "Piano Yamaha",
  quantity: "98"
}

// Acessando a propriedade do objeto
console.log(product.quantity)

// Atualizando o valor de uma propriedade.
product.quantity = product.quantity - 27
console.log(product.quantity)

// Notação de colchetes.
product["quantity"] = product.quantity + 43
console.log(product)

*/

/* Aula 5 - Encadeamento opcional (Optional chaining)

const user = {
  id: 1,
  name: "Ícaro",

  address: {
    city: "SP",
    state: "SP",
    geo: {
      latitude: 42.221,
      longitude: 14.292,
    },
  },
  message: function () {
  console.log(`Olá, ${this.name}!`)
  },

}

console.log(user?.address)
console.log(user?.address?.street) // Propriedade indefinida, não tenho certeza se irá existir ou não.

user.message?.() // Para funções também funciona. O ponto deve estar antes do parêntesis.

*/

/* Aula 6 - Operador de coalescência nula (??)

// let content = null
let content = "Olá Ícaro"
console.log(content ?? "Conteúdo default / placeholder / substituto") // Considera apenas null ou undefined!

const user = {
  name: "Ícaro",
  picture: undefined,
}

if (!user.picture) {
  console.log("Você não tem uma foto.");
  user.avatar ?? "default-avatar.png";
  console.log(user.avatar ?? "default-avatar.png")
} else {
  console.log("Você tem uma foto.");
}

*/

/* Aula 7 - Função Construtora */

function createProduct(name) {
  this.name = name;
  this.details = function () {
    console.log(`O nome do produto é ${this.name}`);
  };
}

const product1 = new createProduct("Teclado Yamaha");
console.log(product1.name);
product1.details();

const product2 = new createProduct("Moto Yamaha");
console.log(product2.name);
product2.details();

console.log(product1 === product2); // São objetos diferentes.

// Exemplos de funções construtoras disponíveis no próprio JS.
let myName = new String("Ícaro");
console.log(myName);

let price = "40.6".replace(".", ",");
console.log(price);

let date = new Date("2024-1-1");
console.log(date);
