/* // Fonction pour valider le formulaire
function validerFormulaire() {
    let nom = document.getElementById('nom').value;
    let prenom = document.getElementById('prenom').value;
    let genre = document.querySelector('input[name="genre"]:checked');
    let date = document.getElementById('date').value;
    let codePostal = document.getElementById('CodePostal').value;
    let sujet = document.getElementById('sujet').value;
    let question = document.querySelector('textarea[name="question"]').value;
    let email = document.getElementById('email').value;

    // Initialiser le message d'erreur à une chaîne vide
    let erreurMessage = "";

    // Vérifier chaque champ
    if (nom === "") {
        erreurMessage += "Veuillez entrer votre nom.\n";
    }
    if (prenom === "") {
        erreurMessage += "Veuillez entrer votre prénom.\n";
    }
    if (!genre) {
        erreurMessage += "Veuillez sélectionner votre genre.\n";
    }
    if (date === "") {
        erreurMessage += "Veuillez entrer votre date de naissance.\n";
    }
    if (codePostal === "") {
        erreurMessage += "Veuillez entrer votre code postal.\n";
    }
    if (sujet === "") {
        erreurMessage += "Veuillez sélectionner un sujet.\n";
    }
    if (question === "") {
        erreurMessage += "Veuillez poser votre question.\n";
    }
    if (email === "") {
        erreurMessage += "Veuillez entrer votre email.\n";
    }

    // Si des erreurs sont détectées, afficher un message et empêcher l'envoi du formulaire
    if (erreurMessage !== "") {
        alert(erreurMessage);
        return false; // Empêcher l'envoi du formulaire
    }

    // Si tout est correct, envoyer le formulaire
    return true;
}

// Attacher la fonction de validation au formulaire lors de la soumission
document.querySelector('form').addEventListener('submit', function(event) {
    if (!validerFormulaire()) {
        event.preventDefault(); // Empêcher l'envoi du formulaire si la validation échoue
    }
});
 */

/* function validateForm() {
    // Get the form element
    const form = document.getElementById('contactForm');
  
    // Get the form fields
    const nom = form.nom.value;
    const prenom = form.prenom.value;
    const genre = form.genre.value;
    const ddn = form.ddn.value;
    const cp = form.cp.value;
    const adresse = form.adresse.value;
    const ville = form.ville.value;
    const email = form.email.value;
    const sujet = form.sujet.value;
    const question = form.question.value;
  
    // Check if the nom field is empty
    if (nom === '') {
      alert('Veuillez entrer votre nom.');
      return false;
    }
  
    // Check if the prenom field is empty
    if (prenom === '') {
      alert('Veuillez entrer votre prénom.');
      return false;
    }
  
    // Check if the genre field is empty
    if (genre === '') {
      alert('Veuillez choisir votre genre.');
      return false;
    }
  
    // Check if the ddn field is empty
    if (ddn === '') {
      alert('Veuillez entrer votre date de naissance.');
      return false;
    }
  
    // Check if the cp field is empty
    if (cp === '') {
      alert('Veuillez entrer votre code postal.');
      return false;
    }
  
    // Check if the adresse field is empty
    if (adresse === '') {
      alert('Veuillez entrer votre adresse.');
      return false;
    }
  
    // Check if the ville field is empty
    if (ville === '') {
      alert('Veuillez entrer votre ville.');
      return false;
    }
  
    // Check if the email field is empty
    if (email === '') {
      alert('Veuillez entrer votre email.');
      return false;
    }
  
    // Check if the sujet field is empty
    if (sujet === '') {
      alert('Veuillez choisir un sujet.');
      return false;
    }
  
    // Check if the question field is empty
    if (question === ''){
      alert('Veuillez entrer votre question.');
      return false;
    }
  
    // If all fields are filled, submit the form
    form.submit();
  } */

const form = document.getElementById('contactForm');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const isValid = validateForm();

  if (isValid) {
    form.submit();
  }
});

function validateForm() {
  const nom = form.nom.value;
  const prenom = form.prenom.value;
  const genre = form.genre.value;
  const ddn = form.ddn.value;
  const cp = form.cp.value;
  const adresse = form.adresse.value;
  const ville = form.ville.value;
  const email = form.email.value;
  const sujet = form.sujet.value;
  const question = form.question.value;

  if (nom === '') {
    alert('Veuillez entrer votre nom.');
    return false;
  }

  if (prenom === '') {
    alert('Veuillez entrer votre prénom.');
    return false;
  }

  if (genre === '') {
    alert('Veuillez choisir votre genre.');
    return false;
  }

  if (ddn === '') {
    alert('Veuillez entrer votre date de naissance.');
    return false;
  }

  if (cp === '') {
    alert('Veuillez entrer votre code postal.');
    return false;
  }

  if (adresse === '') {
    alert('Veuillez entrer votre adresse.');
    return false;
  }

  if (ville === '') {
    alert('Veuillez entrer votre ville.');
    return false;
  }

  if (email === '') {
    alert('Veuillez entrer votre email.');
    return false;
  }

  if (sujet === '') {
    alert('Veuillez choisir un sujet.');
    return false;
  }

  if (question === ''){
    alert('Veuillez entrer votre question.');
    return false;
  }

  return true;
}