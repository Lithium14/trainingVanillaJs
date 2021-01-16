let txt = '';

let sportif1 = {
  nom: "toto",
  age: 25,
  poids: 80,
  taille: 180,
  affichage : function() {
    txt += 'Nom : ' + this.nom + '\n';
    txt += 'Age : ' + this.age + '\n';
    txt += 'Poids : ' + this.poids + '\n';
    txt += 'Taille : ' + this.taille + '\n';
    return txt;
  },
  getForce: function () {
    let force = (this.taille * this.poids) / this.age;
    return force;
   }
};

let sportif2 = {
  nom: "marcel",
  age: 32,
  poids: 100,
  taille: 175,
  affichage : function() {
    txt += 'Nom : ' + this.nom + '\n';
    txt += 'Age : ' + this.age + '\n';
    txt += 'Poids : ' + this.poids + '\n';
    txt += 'Taille : ' + this.taille + '\n';
    return txt;
  },
  getForce: function () {
    let force = (this.taille * this.poids) / this.age;
    return force;
   }
};
