"use strict";
let lignes = 0;
let total_points = 0;
// Tableau d'objets slide 40
const persons = [
    { nom: "nom-1", prenom: "prenom-1", points: 5 },
    { nom: "nom-2", prenom: "prenom-2", points: 10 },
    { nom: "nom-3", prenom: "prenom-3", points: 15 }
];
init();
function init() {
    for (const person of persons) {
        doInsert(person.nom, person.prenom, person.points);
    }
}
function doNewData() {
    // Récupération des champs par leur identifiant slides 62 et 63
    const elt_nom = document.getElementById("form_nom");
    const elt_prenom = document.getElementById("form_prenom");
    const elt_points = document.getElementById("form_points");
    // Lecture des valeurs des champs
    const nom = elt_nom.value;
    const prenom = elt_prenom.value;
    const points = Number(elt_points.value);
    // Condition vérification que les champs ne sont pas vides
    if (nom === "" || prenom === "" || elt_points.value === "") {
        // Affichage d'une alerte avec l'objet window
        window.alert("Formulaire incomplet !");
    } else {
        // Insertion dans le tableau 
        doInsert(nom, prenom, points);
        // Ajoute de la nouvelle personne dans le tableau persons
        persons.push({
            nom: nom,
            prenom: prenom,
            points: points
        });
        // Vidage des champs après l'insertion
        elt_nom.value = "";
        elt_prenom.value = "";
        elt_points.value = "";
    }
}
function doInsert(nom, prenom, points) {
    lignes++;
    total_points += points;
    doInsertRowTable(lignes, nom, prenom, points);
    update_summary();
}
function update_summary() {
    const p1 = document.getElementById("p1");
    const p3 = document.getElementById("p3");
    p1.innerText = lignes + " ligne(s)";
    p3.innerText = "Total point(s)= " + total_points;
}
function consoleTableau() {

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