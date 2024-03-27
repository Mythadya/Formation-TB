/* const size = prompt ("Entrez la taille du tableau");
const sizenum = parseInt(size);
const tab = new Array(sizenum);
for (let i = 0; i < tab.length; i++){
    tab[i] = prompt('Entrez la valeur ${i + 1} du tableau');
}
alert("voici le contenue du tableau :" + tab.join(",")); */

/* function sumInput() {
    let number = [];
    let count = 0;
    let sum = 0;

    while (true) {
        const num = prompt("Entrez un nombres (0 pour stopper):" , 0);
        const number = +num

        if (number === 0) {
            break;
        }
        number.push(number);
        count++;
        sum += number;
    }
    const average = sum / count;
    alert('number of values : ${count}\nSum: ${sums}\nAverage: ${average}');
}
sumInput(); */


                /* **1er version** */
 // Initialisation du tableau
let valeurs = [];
let valeur;

// Saisie des valeurs
do {
    valeur = parseFloat(window.prompt("Entrez une valeur numérique (entrez 0 pour arrêter la saisie):"));
    if (!isNaN(valeur)) {
        if (valeur !== 0) {
            valeurs.push(valeur);
        }
    } else {
        window.alert("Veuillez entrer une valeur numérique valide.");
    }
} while (valeur !== 0);

// Calcul du nombre de valeurs, la somme et la moyenne
let nombreDeValeurs = valeurs.length;
let somme = 0;
for (let i = 0; i < nombreDeValeurs; i++) {
    somme += valeurs[i];
}
let moyenne = somme / nombreDeValeurs;

// Affichage des résultats
window.alert("Nombre de valeurs saisies : " + nombreDeValeurs + "\nSomme des valeurs : " + somme + "\nMoyenne des valeurs : " + moyenne);



         /*  **2eme version** */
/* // Fonction pour saisir une valeur numérique à l'aide de window.prompt()
function saisirValeurNumerique(message) {
    let valeur = prompt(message);
    valeur = parseFloat(valeur); // Convertir en nombre à virgule flottante
    return valeur;
}

// Fonction principale pour saisir les valeurs et les ranger dans un tableau
function saisirEtRangerDansTableau() {
    let tableau = []; // Initialiser un tableau vide
    
    // Boucler pour saisir chaque valeur et l'ajouter au tableau
    while (true) {
        let valeur = saisirValeurNumerique("Saisissez une valeur (saisie terminée avec 0):");
        if (valeur === 0) {
            break; // Sortir de la boucle si la valeur saisie est 0
        }
        tableau.push(valeur); // Ajouter la valeur au tableau
    }
    
    // Afficher le nombre de valeurs saisies
    console.log("Nombre de valeurs saisies:", tableau.length);
    
    // Calculer la somme des valeurs
    let somme = 0;
    for (let i = 0; i < tableau.length; i++) {
        somme += tableau[i];
    }
    
    // Afficher la somme des valeurs
    console.log("Somme des valeurs:", somme);
    
    // Calculer la moyenne des valeurs
    let moyenne = somme / tableau.length;
    
    // Afficher la moyenne des valeurs
    console.log("Moyenne des valeurs:", moyenne);
}

// Appel de la fonction principale pour saisir et ranger les valeurs dans un tableau
saisirEtRangerDansTableau();
 */