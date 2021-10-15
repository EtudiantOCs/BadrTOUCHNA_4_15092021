function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const signUpModal = document.getElementById("sign-up-modal");
const closeSignUpModal = document.getElementById("close-submit");
const confirmationModal = document.getElementById("submit-state-modal");
const closeconfirmationModal = document.getElementById("close-confirmation");
const modalBg = document.querySelector(".bground")
const modalBtn = document.querySelectorAll(".modal-btn");
const okBtn = document.querySelector("#submit-state-modal .btn-ok")
const submitBtn = document.getElementById("submit-state-modal .btn-submit")
const formData = document.querySelectorAll(".formData");
const form = document.querySelector(".modal-body > form");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  signUpModal.style.display = "block";
}

// close modal form
function closeModal(modal) {
  modal.style.display = "none";
}

// add close function to crosses and button
closeconfirmationModal.addEventListener("click", () => { closeModal(confirmationModal)});
closeSignUpModal.addEventListener("click", () => { closeModal(signUpModal)});
okBtn.addEventListener("click", () => { closeModal(confirmationModal)});

// form fields objects
const formFields = [

  {
    inputContainer: document.getElementById("formData-first"),
    input: document.getElementById("first"),
    errorMessage: "Minimum 2 caractères",
  },
  {
    inputContainer: document.getElementById("formData-last"),
    input: document.getElementById("last"),
    errorMessage: "Minimum 2 caractères",
  },
  {
    inputContainer: document.getElementById("formData-email"),
    input: document.getElementById("email"),
    errorMessage: "Syntaxe email invalide",
  },
  {
    inputContainer: document.getElementById("formData-birthdate"),
    input: document.getElementById("birthdate"),
    errorMessage: "Entrer votre date de naissance comprise entre 01/01/1910 et 01/01/2010",
  },
  {
    inputContainer: document.getElementById("formData-quantity"),
    input: document.getElementById("quantity"),
    errorMessage: "Entrer un nombre entre 0 et 99",
  },
  {
    inputContainer: document.getElementById("formData-location"),
    input: document.getElementById("location1"),
    errorMessage: "Selectionner une ville",
  },
  {
    inputContainer: document.getElementById("formData-user-condition"),
    input: document.getElementById("checkbox1"),
    errorMessage: "Vous devez acceptez les termes et conditions pour poursuivre",
  }
  
]

// apply check validity to each input
formFields.forEach(field => {
   field.input.addEventListener("change", () => { checkValidity(field)})
  }
)

// form field validity inspection
function checkValidity(formField) {

  if (!formField.input.validity.valid || formField.input.validity.valueMissing) {
    formField.inputContainer.setAttribute("data-error", formField.errorMessage);
    formField.inputContainer.setAttribute("data-error-visible", "true")
  }
  else {
    formField.inputContainer.setAttribute("data-error", "");
    formField.inputContainer.setAttribute("data-error-visible", "")
  }
}

// inspects if form is fully filled
function formIsValid() {

  let valid = true;

  for (let i = 0; i < formFields.length; i++) {  
    if (formFields[i].input.checkValidity() == false) {
      return false}
  }
  return valid
}

// submit form
function validate() {

  if (formIsValid()) {
    // delete data and brings up confirmation modal
    form.reset();
    signUpModal.style.display = "none";
    confirmationModal.style.display = "block"
  }
  else {
    formFields.forEach(field => checkValidity(field))
  }
}