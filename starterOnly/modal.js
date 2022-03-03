function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

function closeModal() {
  modalbg.style.display = "none"
}

function validateFirstName() {
  let firstname = document.getElementById('first');
  let firstnameFormData = document.getElementById('first-form-data');
  if(firstname.value.length < 2) 
  { 
  firstnameFormData.setAttribute("data-error-visible","true")
  return false
}
  else{
  firstnameFormData.setAttribute("data-error-visible","")
  return true
  }
}

function validateLastName() {
  let lastname = document.getElementById('last');
  let lastnameFormData = document.getElementById('second-form-data');
  if(lastname.value.length < 2) 
  { 
  lastnameFormData.setAttribute("data-error-visible","true")
  return false
}
  else{
  lastnameFormData.setAttribute("data-error-visible","")
  return true
  }
}

function checkEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
function validateEmail() {
  var email = document.getElementById("email").value;
  let emailFormData = document.getElementById('third-form-data');

  if (!checkEmail(email)) {
    emailFormData.setAttribute("data-error-visible","true")
    return false;
  } else {
    emailFormData.setAttribute("data-error-visible","")
  }
  return true;
}

function validateBirthdate() {
  {
    var x = document.getElementById("birthdate").value;
    let birthdateFormData = document.getElementById('four-form-data');
    var reg = /(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d/;
    if (!x.match(reg)) {
      birthdateFormData.setAttribute("data-error-visible","true")
      return false;
    }
    else {
      
      birthdateFormData.setAttribute("data-error-visible","")
      return true;
    }           
  }
}

function checkLocation(){
  if(document.getElementById("location1").checked == false &&
  document.getElementById("location2").checked == false &&
  document.getElementById("location3").checked == false &&
  document.getElementById("location4").checked == false &&
  document.getElementById("location5").checked == false &&
  document.getElementById("location6").checked == false
  
  ) {
    return false;
  }
  else{
      return true;
  }
}

function checkBox1(){
  if(document.getElementById("checkbox1").checked) {
    return true;
  }
  else{
      return false;
  }
}

function validate () {
  let checkbox1FormData = document.getElementById('six-form-data');


if (!validateFirstName()) {
  return false ;
}

if (!validateLastName()) {
  return false ;
}

if (!validateEmail()) {
  return false ;
}

if (!validateBirthdate()) {
  
  //alert("Vous devez entrer votre date de naissance.");
  return false ;
}

if (!checkLocation()) {
  alert("Vous devez choisir un tournoi.")
  return false 
  }


if (!checkBox1()) {
  checkbox1FormData.setAttribute("data-error-visible","true")
  //alert("Vous devez accepter les conditions d'utilisation.")
return false 
}

else {
  alert ("Merci ! Votre réservation a été reçue.")
return true
} 
    
}
  
