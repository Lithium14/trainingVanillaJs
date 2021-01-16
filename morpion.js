const readline = require('readline-sync');

let morpion =[
  [0,0,0],
  [0,0,0],
  [0,0,0]
];

afficherGrille(morpion);
console.log("----------------------------");
console.log('Quelle position voulez-vous ?')
let ligneSaisi = readline.question('Ligne : ');
let colonneSaisi = readline.question('Colonne : ');

morpion[ligneSaisi - 1][colonneSaisi - 1] = 1;
afficherGrille(morpion);
// Permet d'afficher n'importe quel tableau à 2 dimensions
function afficherGrille(tab) {
  for(let i = 0; i < tab.length; i++) {
    let txt = "";
    for(let j = 0; j < tab[i].length; j++) {
      if(tab[i][j] === 0) {
        txt += "| |"
      } else if(tab[i][j] === 1 ) {
        txt+="|x|";
      } else if(tab[i][j] === 2 ) {
        txt+="|0|";
      }
    }
    console.log(txt);
  }
}
