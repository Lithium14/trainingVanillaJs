let classe = {
  eleve0 :{
    nom: 'Marc',
    age: 21,
    notes: [12,15,13,10,7]
 },
 eleve1 :{
    nom: 'Eric',
    age: 18,
    notes: [5, 15, 3, 8, 17]
 },
 eleve2 :{
    nom: 'Marie',
    age: 22,
    notes: [10,10,11,12,11]
 },

 afficherEleve: function(eleve) {
     console.log("Nom : " + eleve.nom);
     console.log("Age : " + eleve.age);
     console.log("Notes : " );
 },

 afficherClasse: function() {
     this.afficherEleve(this.eleve0);
     this.afficherEleve(this.eleve1);
     this.afficherEleve(this.eleve2);
 },

 calculerMoyenneEleve: function(eleve) {
     let moyenne = 0;
     let toto;
    for(let i = 0; i < eleve.notes.length; i ++) {
        moyenne = (moyenne + eleve.notes[i]);
        toto = moyenne;
        toto = toto / eleve.notes.length;
    }
    console.log(toto);

 },

 calculerMoyenneClasse: function() {
    let total = 0;
    total =  this.calculerMoyenneEleve(this.eleve0) + this.calculerMoyenneEleve(this.eleve1) + this.calculerMoyenneEleve(this.eleve2);
    total = (total / 3);
    console.log(total);
 }
};
classe.calculerMoyenneEleve(classe.eleve1, 'eleve');
classe.calculerMoyenneClasse('classe');
classe.afficherClasse('seeClasse');
classe.afficherEleve(classe.eleve0,'seeEleve');
