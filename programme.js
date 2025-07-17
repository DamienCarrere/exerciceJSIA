function calculerNombreTables({
    tailleSalle,
    pathUser,
    tailleTable,
    tailleChaise,
    tailleEntree,
    espaceConfort
}) {
    let total = 0; // compteur de total à 0 (initialisation)


    let tailleRestante = tailleSalle - (pathUser + tailleEntree); // Taille restante = salle - chemin utilisateur - entrée

    const tailleParTable = tailleTable + (tailleChaise * 2) + espaceConfort; // fusion de table, chaise et confort dans une seule variable tailleParTable

    while (tailleRestante >= tailleParTable) {
        tailleRestante -= tailleParTable;       //Tant que taille restante est supérieure à tailleParTable alors on soustrait la tailleRestante par la tailleParTable
        total++;                                //puis on incrémente total
    }

    return total;
}


const params = {
    tailleSalle: 20,
    pathUser: 0.75,
    tailleTable: 1,                                    //Paramètres
    tailleChaise: 0.1,
    tailleEntree: 0.25,
    espaceConfort: 0
};

const resultat = calculerNombreTables(params);                                       //Définition du résultat de la fonction dans une variable
console.log(`Nombre maximal de tables pouvant être installées : ${resultat}`);         //Affichage du résultat dans la console



function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;                    //fonction pour générer un chiffre aléatoire...
}

const min = 1;
const max = 10;                                                 //...entre 1 et 10

// const testrandom = getRandomArbitrary(min, max);
// console.log(`Chiffre random choisi : ${testrandom}`);           //afficher le chiffre random

// const testrandomArrondi = testrandom.toFixed(2);
// console.log(`Chiffre random arrondi : ${testrandomArrondi}`);   //l'arrondir à deux chiffres après la virgule


let totalPourboires = 0;                                        //variable total pourboire

for (let i = 1; i <= resultat; i++) {                            // boucle for (tant que i est inférieur ou égal à resultat (nombre de tables), + ajouter + incrémentation)
    const randomChiffre = getRandomArbitrary(min, max);            //afficher chiffre random
    const arrondiPourboire = randomChiffre.toFixed(2);            //arrondir le chiffre
    const pourboire = parseFloat(arrondiPourboire);               // parse en float (chiffre virgule et pas string (char) sinon ça additionne le "texte")

    console.log(`Table ${i} : pourboire = ${pourboire} €`);         //Ligne de debug histoire d'afficher chaque chiffre arrondi généré par table, histoire de voir si le programme fait n'importe quoi ou pas
    totalPourboires += pourboire;                                   //additionne le pourboire dans la variable totalPourboire
}


console.log(`Total des pourboires : ${totalPourboires.toFixed(2)} €`);  // afficher total pourboire (arrondi le chiffre parceque sinon ça met un chiffre avec pleins de virgules (c'est dû au fonctionnement de JS il me semble))
