const assert = require("assert");
 const { greet } = require("../src/app");
 console.log("Demarrage des tests...");
 try {
 // Test 1 : sans nom
 assert.strictEqual(greet(), "Hello, world!");
 console.log("Test 1 OK : greet() sans parametre");
 // Test 2 : avec nom
 assert.strictEqual(greet("Najwa"), "Hello, Najwa!");
 console.log("Test 2 OK : greet(’Najwa’)");
 console.log("Tous les tests sont passes avec succes !");
 process.exit(0);
 } catch (error) {
 console.error("Test echoue :", error.message);
 process.exit(1);
 }