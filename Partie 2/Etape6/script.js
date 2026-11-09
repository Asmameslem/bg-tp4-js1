"use strict";
let lignes = 0;
let total_points = 0;
// Tableau d'objets slide 40
const persons = [
    { nom: "nom-1", prenom: "prenom-1", points: 5 },
    { nom: "nom-2", prenom: "prenom-2", points: 10 },
    { nom: "nom-3", prenom: "prenom-3", points: 15 }
];
// Initialisation
init();
function init() {
    for (const person of persons) {
        doInsert(person.nom, person.prenom, person.points);
    }
}
function doNewData() {
    // Sélection des champs avec getElementById() slides 62 et 63
    const elt_nom = document.getElementById("form_nom");
    const elt_prenom = document.getElementById("form_prenom");
    const elt_points = document.getElementById("form_points");
    // Lecture des valeurs
    const nom = elt_nom.value;
    const prenom = elt_prenom.value;
    // Conversion de la valeur en nombre
    const points = Number(elt_points.value);
    // Vérification des champs
    if (nom === "" || prenom === "" || elt_points.value === "") {
        // Affichage d'une boîte d'alerte avec window 
        window.alert("Formulaire incomplet !");
    } else {
        // Ajoute dans l'affichage
        doInsert(nom, prenom, points);
        // Ajoute dans le tableau de données
        persons.push({
            nom: nom,
            prenom: prenom,
            points: points
        });
        // Vidage des champs
        elt_nom.value = "";
        elt_prenom.value = "";
        elt_points.value = "";
    }
}
function doInsert(nom, prenom, points) {
    // Mise à jour des compteurs
    lignes++;
    total_points += points;
    // Insertion dans le DOM
    doInsertRowTable(lignes, nom, prenom, points);
    // Mise à jour du résumé
    update_summary();
}
function update_summary() {
    // Modification du contenu avec innerText slides 90 et 93
    document.getElementById("p1").innerText =
        lignes + " ligne(s)";
    document.getElementById("p3").innerText =
        "Total point(s)= " + total_points;
}
function consoleTableau() {
    // Affichage du tableau dans la console slide 33
    console.log(persons);
}
function deleteRow() {
    // Récupération du tableau
    const table = document.getElementById("table_persons");
    // Récupération de toutes les lignes du tbody
    // getElementsByTagName retourne une collection slides 80 et 83
    const rows = table.tBodies[0].getElementsByTagName("tr");
    // parcourir les lignes de la dernière vers la première
    for (let i = rows.length - 1; i >= 0; i--) {
        // La checkbox se trouve dans la dernière cellule
        const checkbox = rows[i]
            .getElementsByTagName("input")[0];
        // Si la checkbox est cochée
        if (checkbox.checked) {
            // Récupération des points de la quatrième cellule
            const points =
                Number(rows[i].cells[3].innerText);
            // Mise à jour des données
            total_points -= points;
            lignes--;
            // Suppression de la personne du tableau persons
            persons.splice(i, 1);
            // Suppression de la ligne du DOM avec remove()
            // slides 99 et 100
            rows[i].remove();
        }
    }
    // Renumérotation des lignes restantes
    const remainingRows =
        table.tBodies[0].getElementsByTagName("tr");
    for (let i = 0; i < remainingRows.length; i++) {
        remainingRows[i].cells[0].innerText = i + 1;
    }
    // Mise à jour du résumé.
    update_summary();
}
function doInsertRowTable(num, nom, prenom, points) {
    // Récupération du tableau par son identifiant slides 62 et 63
    const table = document.getElementById("table_persons");
    // Création des éléments slides 103 et 104
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
    // Insertion de la checkbox dans la cellule
    col5.append(chk);
    // Attribution des classes CSS avec setAttribute() slides 106 et 107
    col1.setAttribute("class", "col_number");
    col2.setAttribute("class", "col_text");
    col3.setAttribute("class", "col_text");
    col4.setAttribute("class", "col_number");
    col5.setAttribute("class", "col_chkbox");
    // Ajoute des cellules dans la ligne avec append()
    row.append(col1, col2, col3, col4, col5);
    // Ajoute de la ligne dans le tableau
    table.tBodies[0].append(row);
}