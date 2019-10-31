document.getElementById('lastName').addEventListener('input', function() {formCheck(this.value)} ); // Récupère la value de l'input
document.getElementById('firstName').addEventListener('input', function() {formCheck(this.value)} );
document.getElementById('mail').onkeyup = formCheck;
document.getElementById('phoneNumber').onkeyup = formCheck;

document.getElementById('button').disabled = 'true'; // Devient 'true' quand tous les champs sont validés

function formCheck(variable){
  var firstName = document.getElementById('firstName').value, lastName = document.getElementById('lastName').value, mail = document.getElementById('mail').value, phoneNumber = document.getElementById('phoneNumber').value;
  const letters = /^[A-Za-z]+$/;
  // firstName Check
  let char = (variable.charAt(variable.length - 1)); // Isole la dernière lettre de la chaine
  char.match(letters) ? alert(variable) : char == char.slice(0, 1)  ; // Essaie de delete input si char n'est pas une lettre
};
