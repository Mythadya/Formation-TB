
/* function getEntrees() {
    const num1 = parseInt(prompt("Entrez le premier nombre:"));
    const num2 = parseInt(prompt("Entrez le deuxième nombre:"));
    const operateur = prompt("Entrez l'opérateur (+, -, *, /):");
    return { num1, num2, operateur };
  }
  function main() {
    const { num1, num2, operateur } = getEntrees();
    const resultat = operation(num1, num2, operateur);
    alert(`Résultat: ${num1} ${operateur} ${num2} = ${resultat}`);
  }
  function operation(num1, num2, operateur) {

    switch (operateur) {
      case "+":
        return num1 + num2;
      case "-":
        return num1 - num2;
      case "*":
        return num1 * num2;
      case "/":
        if (num2 === 0) {
          alert("Erreur: Division par zéro.");
          return;
        }
        return num1 / num2;
      default:
        alert("Erreur: Opérateur invalide.");
        return;
    }
  
  }

  main();
   */
  

/*  const birthyear = parseInt(prompt("Veuillez entrer votre année de naissance:"));
        const currentYear = new Date().getFullYear();
        const age = currentYear - birthyear;
        if (age >= 18) {
            alert("Vous avez" + age + "ans et vous etes majeur.");
        } else {
            alert("Vous avez" + age + "ans et vous etes mineur.");
        } */

         
/* const birthYear = prompt("Veuillez entrer votre année de naissance:");
const age = 2024 - birthYear;
if (age >= 18) {
  alert(` Vous avez ${age} ans et vous etes majeur.`);
} else {
  alert(` vous avez ${age} ans et vous etes mineur`);
} */


        /* const number = prompt("Veuillez entrer un nombre");
        const numberInt = parseInt(number);
        if(isNaN(numberInt)) {
            alert("Veuillez entrer un nombre valide");
            } else if ( numberInt % 2 === 0) {
                alert("Le nombre est pair.");
            } else {
                alert("le nombre est impair");
            } */

        /* var a = 100;
        let b = 100;
        let c = 1.00;
        let d = true;
        alert ("Ceci est une chaine de caractères:"+a)

        a = b--;
        alert(b);

        alert (c+a)

        d=!d
        alert (d) */

        /*var celsius = prompt("Enter the temperature in degrees Celsius:");
              var fahrenheit = (celsius * 9/5) + 32;
              alert("The temperature in degrees Fahrenheit is " + fahrenheit + "."); */

        /*var num1 = prompt("Entrez le premier nombre :");
               num1 = parseFloat(num1);
               var num2 = prompt("Entrez le deuxième nombre :");
               num2 = parseFloat(num2);
               var produit = num1 * num2;
               alert("Le produit de " + num1 + " et " + num2 + " est " + produit + "."); */

         /* var nomFamille = prompt("Veuillez entrer votre nom de famille :");
         var prenom = prompt("Veuillez entrer votre prénom :");
         alert("Bonjour, " + prenom + " " + nomFamille + " !"); */

/*  let somme = 0;
 let count = 0;
 while (true) {

  let num = parseInt(prompt("Entrez un entier (0 pour arrêter):"));
  if (num === 0) {
    break;
  }
  somme += num;
  count++;
}
 let moyenne = somme / count;
 alert(`Somme: ${somme}\nMoyenne: ${moyenne}`); */

/* var n = prompt ("entrez la valeur de n");

let N = 100;

for (let i = N - 1; i >= 0; i--) {

  console.log(i);

} */

/* let n = parseInt(prompt("Valeur de N: "));
let x = parseInt(prompt("Valeur de X: "));
let multiples = "";
for (let i = 1; i <= n; i++) {
  let multiple = i * x;
  multiples += multiple + " ";
}
alert(multiples); */
/* 
let mot = prompt("Entrez un Mots");
let voyelles = "aeiouAEIOU";
let nbVoyelles = 0;
for (let caractere of mot) {
  if(voyelles.includes(caractere)){
    nbVoyelles++;
  }
}

console.log("le nombre de voyelles dans le mot est :" + nbVoyelles); */

var valeur = [];

while (true){
    var valeur = parseFloat(windows.prompt("Entrez une valeur numérique(entrez 0 pour arreter"));
    if(valeur ===0){
        break;
    }
    valeur.push(valeur);
}

var NombreDeValeurs = valeur.lenght;
var somme = 0;
for (var i = 0; i < NombreDeValeurs; i++){
    somme += valeur[i];
}
var moyenne = somme / NombreDeValeurs;

console.log("Nombre de valeurs saisies : " + NombreDeValeurs);
console.log("Somme des valeurs : " + somme);
console.log("Moyenne des valeurs : " + moyenne)