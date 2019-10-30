document.getElementById('firstName').onkeyup = formCheck;
document.getElementById('lastName').onkeyup = formCheck;
document.getElementById('mail').onkeyup = formCheck;
document.getElementById('phoneNumber').onkeyup = formCheck;

function formCheck(){
  let firstName = document.getElementById('firstName').value, lastName = document.getElementById('lastName').value, mail = document.getElementById('mail').value, phoneNumber = document.getElementById('phoneNumber').value;
  // FirstName Check
  this.style.border = "2px solid red";
  // NumberCheck
};
