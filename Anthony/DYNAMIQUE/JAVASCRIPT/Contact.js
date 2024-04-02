/* function Conta()
{
    var name = document.forms["RegForm"]["nom"];
    var forename = document.forms["RegForms"]["prenom"];
    var what = document.forms["RegForms"]["sujet"];
    var birth = document.forms["RegForms"]["ddn"];
    var addresse = document.forms["RegForms"]["Adresse"];
    var zip = document.forms["RegForms"]["CodePostal"];
    var city = document.forms["RegForms"]["Ville"];
    var email = document.forms["RegForms"]["Email"];

    if (name.value =="")
    {
        alert("Mettez votre nom.");
        name.focus();
        return false;
    }
    if (forename.value =="")
    {
        alert("Mettez votre prenom.");
        forename.focus();
        return false;
    }
    if (what.value =="")
    {
        alert("Indiquez Votre Question");
        what.focus();
        return false;
    }
    if (birth.value =="")
    {
        alert("Indiquez votre date de naissance");
        birth.focus();
        return false;
    }
    if (addresse.value =="")
    {
        alert("Indiquez Votre adresse")
        adresse.focus();
        return false;
    }
    if (zip.value =="")
    {
        alert("Indiquez Votre code postal");
        zip.focus();
        return false;
    }
    if ( city.value =="")
    {
        alert("Indiquez Votre Ville");
        city.focus();
        return false;
    }
    if (email.value == "")
    {
        alert("Mettez une adresse email valide");
        email.focus();
        return false;
    }
    if (email.value.indexOf("@", 0) < 0) {
        alert("Mettez une adresse email valide.");
        email.focus();
        return false;
    }
      if (email.value.indexOf(".", 0) < 0) {
        alert("Mettez une adresse email valide.");
        email.focus();
        return false;
    }
    return false
} */

/* function validateForm() {
    var nom = document.getElementById("nom").value;
    var prenom = document.getElementById("prenom").value;
    var genre = document.querySelector('input[name="Genre"]:checked');
    var date = document.getElementById("date").value;
    var codePostal = document.getElementById("Codepostal").value;
    var adresse = document.getElementById("Adresse").value;
    var ville = document.getElementById("Ville").value;
    var email = document.getElementById("Email").value;
    var sujet = document.getElementById("sujet").value;

    if (nom == "" || prenom == "" || genre == null || date == "" || codePostal == "" || adresse == "" || ville == "" || email == "" || sujet == "") {
        alert("Veuillez remplir tous les champs obligatoires.");
        return false;
    }

    return true;
} */

/* function validateForm() {
    const inputs = document.querySelectorAll('input[required]');
    let isValid = true;
    inputs.forEach(input => {
      if (input.value.length === 0) {
        input.nextElementSibling.innerText = 'Ce champ est obligatoire';
        isValid = false;
      } else {
        input.nextElementSibling.innerText = '';
      }
  
    });
    const textarea = document.querySelector('textarea[required]');
    if (textarea.value.length === 0) {
      textarea.nextElementSibling.innerText = 'Ce champ est obligatoire';
      isValid = false;
    } else {
      textarea.nextElementSibling.innerText = '';
    }
    if (!isValid) {
      return false;
    }
    return true;
  } */

  function validateForm() {
    let inputs = ['nom', 'prenom', 'Genre', 'date', 'CodePostal', 'Adresse', 'Ville', 'Email', 'sujet', 'Votre question'];

    for (let i = 0; i < inputs.length; i++) {
      let input = document.getElementById(inputs[i]);
      let errorMessage = document.getElementById(`error-${inputs[i]}`);
      if (input.value.trim() === '') {
        errorMessage.style.display = 'block';
        input.style.borderColor = 'red';
      } else {
        errorMessage.style.display = 'none';
        input.style.borderColor = 'initial';
      }
    }
    for (let i = 0; i < inputs.length; i++) {
      let input = document.getElementById(inputs[i]);
      if (input.style.borderColor === 'red') {
        return false;
      }
    }
  
    return true;
  }

  document.querySelectorAll('input[id], select[id]').forEach((input) => {
    let errorMessage = document.createElement('p');
    errorMessage.id = `error-${input.id}`;
    errorMessage.style.color = 'red';
    errorMessage.style.display = 'none';
    errorMessage.textContent = `Veuillez remplir ce champ.`;
    input.parentNode.insertBefore(errorMessage, input.nextSibling);
  });