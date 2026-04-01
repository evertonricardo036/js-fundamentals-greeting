// Usando Arrow Function para tornar o código modular
const generateGreeting = (greeting, subject) => `${greeting}, ${subject}!`;

const a = 'Hello';
const b = 'world';

// Armazenando o resultado em uma constante antes de exibir
const resultString = generateGreeting(a, b);

console.log(resultString);
