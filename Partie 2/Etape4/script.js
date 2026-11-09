"use strict";
// Compteurs utilisés pour le résumé
let lignes = 0;
let total_points = 0;
// Tableau d'objets slide 40
const persons = [
    { nom: "nom-1", prenom: "prenom-1", points: 5 },
    { nom: "nom-2", prenom: "prenom-2", points: 10 },
    { nom: "nom-3", prenom: "prenom-3", points: 15 }
];
// Initialisation du tableau
init();
function init() {
    // Parcours du tableau persons
    for (const person of persons) {
        doInsert(person.nom, person.prenom, person.points);
    }
}
function doInsert(nom, prenom, points) {
    // Mise à jour des variables du résumé
    lignes++;
    total_points += points;
    // Insertion dans le tableau 
    doInsertRowTable(lignes, nom, prenom, points);
    // Mise à jour visuelle du résumé
    update_summary();
}
function update_summary() {
    // Récupération des éléments par leur id slides 62 et 63
    const p1 = document.getElementById("p1");
    const p3 = document.getElementById("p3");
    // Modification du texte affiché avec innerText slides 90 et 93
    p1.innerText = lignes + " ligne(s)";
    p3.innerText = "Total point(s)= " + total_points;
}
function consoleTableau() {
    // Affichage dans la console slide 33
    console.log(persons);
}
function doInsertRowTable(num, nom, prenom, points) {
    const table = document.getElementById("table_persons");
    const row = document.createElement("tr");
    row.setAttribute("class", "row");
    const col1 = document.createElement("td");
    const col2 = document.createElement("td");
    const col3 = document.createElement("td");
    const col4 = document.createElement("td");
    const col5 = document.createElement("td");
    col1.innerText = num;
    col2.innerText = nom;
    col3.innerText = prenom;
    col4.innerText = points;
    const chk = document.createElement("input");
    chk.setAttribute("type", "checkbox");
    col5.append(chk);
    col1.setAttribute("class", "col_number");
    col2.setAttribute("class", "col_text");
    col3.setAttribute("class", "col_text");
    col4.setAttribute("class", "col_number");
    col5.setAttribute("class", "col_chkbox");
    row.append(col1, col2, col3, col4, col5);
    table.tBodies[0].append(row);
}