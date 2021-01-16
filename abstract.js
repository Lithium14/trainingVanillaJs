let chat1 = creerAnimal('Tya',7,'femelle')
let chat2 = creerAnimal('Milo',5, 'mâle')
let chat3 = creerAnimal('Felicia',5, 'femelle');
let chat4 = creerAnimal('Lilili',1, 'femelle');
let chien1 = creerAnimal('Mina',2,'femelle');
let chien2 = creerAnimal('Pam',15,'femelle');
let chien3 = creerAnimal('Hocket',7,'mâle');

let chats = [chat1,chat2, chat3, chat4];
let chiens = [chien1, chien2, chien3]

afficherListeAnimal(chats);
console.log(`La moyenne d'âge des chats ${chats.length} est de ${calculerMoyenAge(chats)} ans`)

// afficherListeAnimal(chiens);
// calculerMoyenAge(chiens);
function creerAnimal(nom, age, sexe ) {
  let animal = {};
  animal.nom = nom;
  animal.age = age;
  animal.sexe = sexe;
  return animal;
}

function afficherListeAnimal(liste) {
  let txt = '';
  for(let i = 0; i < liste.length; i++) {
    txt+= "Nom : " + liste[i].nom + '\n';
    txt+= "Age : " + liste[i].age + '\n';
    txt+= "Sexe : " + liste[i].sexe + '\n';
    txt+='--------------------------------------------------------------------- \n'
  }
  console.log(txt);
}

function calculerMoyenAge(liste) {
  let moyenne = 0;
  for(let i = 0; i < liste.length; i++) {
    moyenne += liste[i].age;
  }
  return moyenne;
}
