// Initialisation des compteurs
let moins20 = 0;
let entre20et40 = 0;
let plus40 = 0;

// Fonction pour demander l'âge et mettre à jour les compteurs
function demanderAge() {
    let age = prompt("Entrez l'âge de la personne (ou 100 pour arrêter) :");
    age = parseInt(age);

    // Vérification si l'âge est un nombre valide
    if (!isNaN(age)) {
        if (age < 20) {
            moins20++;
        } else if (age >= 20 && age <= 40) {
            entre20et40++;
        } else if (age > 40 && age < 100) {
            plus40++;
        } else if (age === 100) {
            // Affichage des résultats
            alert("Personnes de moins de 20 ans : " + moins20 +
                  "\nPersonnes entre 20 et 40 ans : " + entre20et40 +
                  "\nPersonnes de plus de 40 ans : " + plus40);
        } else {
            alert("L'âge saisi est invalide.");
        }

        // Demander l'âge suivant si ce n'est pas un centenaire
        if (age !== 100) {
            demanderAge();
        }
    } else {
        alert("Veuillez entrer un âge valide.");
        demanderAge();
    }
}

// Appel de la fonction pour démarrer le processus
demanderAge();
