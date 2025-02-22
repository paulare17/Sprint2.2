
// Exercise 6
function validate() {
	var error = 0;
  
	//expressions regulars (regex) per a que sigin només lletres
	var onlyLetters = /^[a-zA-Z]+$/;
	// o com a mínim una lletra i un número
	var passwordLettersNums = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]+$/;
	// o el patró dels emails
	var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
	// Get the input fields
	var fName = document.getElementById("fName");
	var fLastName = document.getElementById("fLastN");
	var fEmail = document.getElementById("fEmail");
	var fAddress = document.getElementById("fAddress");
	var fPassword = document.getElementById("fPassword");
	var fPhone = document.getElementById("fPhone");
  
	//Get the VALUE of inputs fields
	var fNameValue = fName.value;
	var fLastNameValue = fLastName.value;
	var fEmailValue = fEmail.value;
	var fAddressValue = fAddress.value;
	var fPasswordValue = fPassword.value;
	var fPhoneValue = fPhone.value;

	// Get the error elements
	//no necessari, bootsrap relaciona l'input amb un invalid-feedback gràcies a is-invalid
  

	// Validate fields entered by the user: name, phone, password, and email
	if (fNameValue === "" || fNameValue.length < 3 || !onlyLetters.test(fNameValue)) {
	  error++;
	  fName.classList.add("is-invalid");
	} else {
	  fName.classList.remove("is-invalid");
	}
  
	if (fEmailValue === "" || fEmailValue.length <= 5 || !emailRegex.test(fEmailValue)) {
	  error++;
	  fEmail.classList.add("is-invalid");
	} else {
	  fEmail.classList.remove("is-invalid");
	}
  
	if (fAddressValue === "" || fAddressValue.length <= 3) {
	  error++;
	  fAddress.classList.add("is-invalid");
	} else {
	  fAddress.classList.remove("is-invalid");
	}
  
	if (fLastNameValue === "" || fLastNameValue.length <= 3 || !onlyLetters.test(fLastNameValue)) {
	  error++;
	  fLastName.classList.add("is-invalid");
	} else {
	  fLastName.classList.remove("is-invalid");
	}
  
	if (fPasswordValue === "" || fPasswordValue.length <= 3 || !passwordLettersNums.test(fPasswordValue)) {
	  error++;
	  fPassword.classList.add("is-invalid");
	} else {
	  fPassword.classList.remove("is-invalid");
	}
  
	if (fPhoneValue === "" || fPhoneValue.length !== 9 || isNaN(fPhoneValue)) {
	  error++;
	  fPhone.classList.add("is-invalid");
	} else {
	  fPhone.classList.remove("is-invalid");
	}
  
	if (error > 0) {
	  alert("Error");
	  return false;
	} else {
	  alert("OK");
	  return true;
	}
  }