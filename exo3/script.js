"use strict";
// Déclaration de la fonction B diapositive 46
// Le paramètre note est de type number diapositive 38
// La condition if/else diapositive 43.
// B retourne un booléen : true ou false.
function B(note) {
    return note >= 10;
}
// Déclaration de la fonction A, qui appelle B diapositive 46
function A() {
    // Déclaration du tableau Students diapositive 39
    const Students = [
        [1000, "JOHN", "DOE", 14, 5],
        [2000, "BOB", "CARLTON", 7, 1],
        [3000, "RAYANE", "SMITH", 13, 3]
    ];
    // Parcours du tableau avec for diapositive 45
    for (let i = 0; i < Students.length; i++) {
        // Appel de B avec la note de chaque étudiant diapositive 46
        if (B(Students[i][3])) {
            // Affichage avec console.log() diapositive 34
            console.log(Students[i][0] + ": ADMIS");
        } else {
            // Affichage avec console.log() diapositive 34
            console.log(Students[i][0] + ": AJOURNÉ");
        }
    }
}