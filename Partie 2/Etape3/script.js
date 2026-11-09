"use strict";
// Variable utilisée pour numéroter les lignes
// Variables et constantes  slides 36 et 40
let lignes = 0;
// Tableau d'objets  slide 40
const persons = [
    { nom: "nom-1", prenom: "prenom-1", points: 5 },
    { nom: "nom-2", prenom: "prenom-2", points: 10 },
    { nom: "nom-3", prenom: "prenom-3", points: 15 }
];
// Appel de la fonction d'initialisation
init();
function init() {
    // Boucle pour parcourir le tableau persons
    for (const person of persons) {
        doInsert(person.nom, person.prenom, person.points);
    }
}
function doInsert(nom, prenom, points) {
    // Incrémentation du nombre de lignes.
    lignes++;
    // Insertion de la ligne dans le tableau
    doInsertRowTable(lignes, nom, prenom, points);
}
function consoleTableau() {
    // Affichage du tableau dans la console slide 33
    console.log(persons);
}
function doInsertRowTable(num, nom, prenom, points) {
    // Récupération de l'élément par son id slides 62 et 63
    const table = document.getElementById("table_persons");
    // Création des éléments pour le DOM slides 103 et 104
    const row = document.createElement("tr");
    row.setAttribute("class", "row");
    const col1 = document.createElement("td");
    const col2 = document.createElement("td");
    const col3 = document.createElement("td");
    const col4 = document.createElement("td");
    const col5 = document.createElement("td");
    // Modification du contenu avec innerText slides 90 et 93
    col1.innerText = num;
    col2.innerText = nom;
    col3.innerText = prenom;
    col4.innerText = points;
    // Création de la checkbox
    const chk = document.createElement("input");
    chk.setAttribute("type", "checkbox");
    col5.append(chk);
    // Attribution des classes avec setAttribute() slides 106 et 107
    col1.setAttribute("class", "col_number");
    col2.setAttribute("class", "col_text");
    col3.setAttribute("class", "col_text");
    col4.setAttribute("class", "col_number");
    col5.setAttribute("class", "col_chkbox");
    // Ajoute des cellules dans la ligne
    row.append(col1, col2, col3, col4, col5);
    // Ajoute de la ligne dans le tbody
    table.tBodies[0].append(row);
}