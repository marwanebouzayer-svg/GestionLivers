// build.js
const fs = require("fs");
const path = require("path");

const distDir = path.join(__dirname, "dist");
if (!fs.existsSync(distDir)) fs.mkdirSync(distDir, { recursive: true });

const htmlContent = `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <title>Build CI/CD</title>
</head>
<body>
  <h1>Build genere avec succes</h1>
  <p>Ce fichier a ete genere par le script <code>build.js</code> dans le pipeline CI/CD.</p>
</body>
</html>`;

fs.writeFileSync(path.join(distDir, "index.html"), htmlContent, "utf-8");
console.log("Build termine : dist/index.html genere.");