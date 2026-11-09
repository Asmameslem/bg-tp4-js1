"use strict";
// Fonction pour  insérer une nouvelle ligne dans le tableau
function doInsertRowTable(num, nom, prenom, points) {
    // Récupération d'un élément par son identifiant slides 62 et63
    const table = document.getElementById("table_persons");
    // Création d'un nouvel élément et insertion dans le DOM
    // Création et insertion d'éléments  slides 103 et 104
    const row = document.createElement("tr");
    // Modification d'un attribut avec setAttribute() slides 106 et 107
    row.setAttribute("class", "row");
    // Création des cinq cellules de la ligne
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
    // Création de la case à cocher
    const chk = document.createElement("input");
    chk.setAttribute("type", "checkbox");
    // Ajoute de la checkbox dans la dernière cellule avec append()
    col5.append(chk);
    // Ajoute des classes avec setAttribute() slides 106 et 107
    col1.setAttribute("class", "col_number");
    col2.setAttribute("class", "col_text");
    col3.setAttribute("class", "col_text");
    col4.setAttribute("class", "col_number");
    col5.setAttribute("class", "col_chkbox");
    // Ajoute des cellules dans la ligne avec append() slides 96 et 98
    row.append(col1, col2, col3, col4, col5);
    // Ajoute la ligne à la fin du tableau
    table.tBodies[0].append(row);
}