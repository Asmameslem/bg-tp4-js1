"use strict";
// Déclaration d'un objet produit (slide 40).
const produit = {
    nom: "Clavier",
    prix: 4500,
    quantite: 5
};
// Calcul de la valeur totale du stock (slide 42).
const valeurStock = produit.prix * produit.quantite;
// Affichage dans la console (slide 34).
console.log("QUESTION 1");
console.log("Produit :", produit.nom);
console.log("Valeur du stock :", valeurStock);
// Déclaration d'un tableau d'objets (slides 39 et 41).
const catalogue = [
    { nom: "Clavier", prix: 4500, quantite: 5 },
    { nom: "Souris", prix: 1800, quantite: 10 },
    { nom: "Ecran", prix: 12000, quantite: 3 },
    { nom: "Casque", prix: 6500, quantite: 4 },
    { nom: "Disque SSD", prix: 15000, quantite: 15 }
];
// Calcul de la somme des prix avec reduce (slide 39).
const sommePrix = catalogue.reduce(
    (acc, p) => acc + p.prix, 0
);
// Calcul du prix moyen.
const prixMoyen = sommePrix / catalogue.length;
// Sélection des produits dont le prix dépasse le prix moyen (slide 39).
const produitsChers = catalogue.filter(
    p => p.prix > prixMoyen
);
console.log("QUESTION 2");
console.log("Prix moyen :", prixMoyen);
console.log("Produits dont le prix dépasse la moyenne :");
console.log(produitsChers);
// Calcul du nombre total d'articles avec reduce (slide 39).
const totalArticles = catalogue.reduce(
    (acc, p) => acc + p.quantite, 0
);
// Calcul de la valeur globale du stock avec reduce (slide 39).
const valeurGlobale = catalogue.reduce(
    (acc, p) => acc + (p.prix * p.quantite), 0
);
console.log("QUESTION 3");
console.log("Nombre total d'articles :", totalArticles);
console.log("Valeur globale du stock :", valeurGlobale);
// Déclaration d'une fonction (slide 46).
function calculerStock(p) {
    return p.prix * p.quantite;
}
console.log("QUESTION 4");
// Vérification sur plusieurs produits.
console.log("Clavier :", calculerStock(catalogue[0]));
console.log("Ecran :", calculerStock(catalogue[2]));
console.log("Disque SSD :", calculerStock(catalogue[4]));
//  fonction qui reçoit un callback (slide 48).
function appliquerTraitement(callback) {

    // Parcours du catalogue avec forEach (slide 45).
    catalogue.forEach(callback);
}
console.log("QUESTION 5");
// 1 traitement : afficher les noms des produits.
appliquerTraitement(
    p => console.log(p.nom)
);
// 2traitement : afficher les prix des produits.
appliquerTraitement(
    p => console.log(p.prix)
);