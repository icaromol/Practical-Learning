/* Aula 1 - Maiúsculo e minúsculo */

let message = "Estudando operadores de texto no JS.";

console.log(message);

// Texto Minúsculo.
console.log(message.toLowerCase());

// Texto Maiúsculo.
console.log(message.toUpperCase());

/* Aula 2 - */

// Comprimento de uma string
console.log(message.length); // Sem parêntesis

let password = "123456";
if (password.length < 6) {
  console.log("A senha deve ter ao menos 6 caracteres");
}

// Quantos digitos tem um número
let value = 12345;
console.log(String(value).length);
console.log(value.toString().length);

/* Aula 3 - Substituindo e fatiando um texto */

console.log(
  String(message).replace(
    "Estudando operadores de",
    "Substituindo e fatiando um"
  )
);

// Extraindo uma parte da string

console.log(message.slice(0, 6));
console.log(message.slice(12, 30));

// Extraindo uma parte da string de trás pra frente.
console.log(message.slice(-12));

let textWithSpace = "       Texto de exemplo      ";
console.log(textWithSpace.length);

// Remover espaços em branco do texto.antes e depois.
console.log(textWithSpace.trim().length);

/* Aula 4 - Completando uma string */

const creditCard = "123456798999234910324";
console.log(creditCard.length);

const lastDigits = creditCard.slice(-4);
console.log(lastDigits);

// 0 padStart preenche a string do início
const maskedNumber = lastDigits.padStart(creditCard.length, "*");
console.log(maskedNumber);

// 0 padEnd preenche a string no final.
const number = "123";
console.log(number.padEnd(10, "*"));

/* Aula 5 - Separando e unindo strings */
let text = "Estudar, aprender, praticar.";

let separate = text.split(",");
console.log(separate);

let message2 = "Estou aprendendo Javascript";
console.log(message2.split(" "));

// Unir a string.
let joined = separate.join(" # ");
console.log(joined);

/* Aula 6 - Encontrando um conteúdo no texto */
