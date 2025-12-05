/**
 * Fonction simple pour d monstration & tests.
 * Retourne un message de salutation.
 */
 function greet(name) {
 if (!name) {
 return "Hello, world!";
 }
 return 'Hello, ${name}!';
 }
 module.exports = {
 greet,
 };