"use strict";
// Déclaration d'un tableau  diapositive 39
const etudiants = ["Etudiant1", "Etudiant2", "Etudiant3"];
// Déclaration de  l'objet étudiant diapositive 40
const etudiant = {
    nom: "John",
    prenom: "DOE",
    age: 30
};
// Déclaration d'un tableau d'objets étudiants diapositive 41
const tableauEtudiants = [
    { nom: "nom1", prenom: "prenom1", age: 21 },
    { nom: "nom2", prenom: "prenom2", age: 22 },
    { nom: "nom3", prenom: "prenom3", age: 23 }
];
// Déclaration de la fonction f1 diapositive 46
function f1() {
    // Parcours du tableau avec une boucle for diapositive 45
    for (let i = 0; i < etudiants.length; i++) {
        // Affichage de chaque étudiant diapositive 34
        console.log(etudiants[i]);
    }
}
// Déclaration de la fonction f2 diapositive 46
function f2() {
    // Affichage de l'objet étudiant avec console.log() diapositive 34
    console.log(etudiant);
}
// Déclaration de la fonction f3 diapositive 46
function f3() {
    // Parcours du tableau d'objets avec une boucle for diapositives 41 et 45
    for (let i = 0; i < tableauEtudiants.length; i++) {
        const etudiantCourant = tableauEtudiants[i];
        // Concaténation des propriétés avec l'opérateur + diapositive 42
        // Affichage du résultat avec console.log() diapositive 34
        console.log(
            etudiantCourant.nom + "-" +
            etudiantCourant.prenom + "-" +
            etudiantCourant.age
        );
    }
}