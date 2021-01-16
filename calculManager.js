let calculManager = {

  addition: function additioner(chiffre) {
    let result = 0;
    for(let i = 1 ; i <= chiffre ; i ++) {
      result+= i;
      console.log('Step : ' + i + ' total : ' + result);
    }
  },

   multiplier : function multiplier(chiffre) {
    let results = 1;
    for(let i = 1 ; i <= chiffre ; i ++) {
      results *= i;
      console.log('Step : ' + i + ' total : ' + results);
    }
  }

}

 module.exports = calculManager;
