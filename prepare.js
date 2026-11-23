const fs=require('fs');fs.mkdirSync('www',{recursive:true});
let h=fs.readFileSync('src/index.html','utf8');
h=h.replace(/<script src="https:\/\/cdnjs[^"]*three[^"]*"><\/script>/,'<script src="three.min.js"></script>');
fs.writeFileSync('www/index.html',h);
fs.copyFileSync('node_modules/three/build/three.min.js','www/three.min.js');
console.log('www pronto (three.js embutido, funciona offline)');
