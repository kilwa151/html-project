//exercice 2:

let x = Math.floor(Math.random() * 10) + 1; 
let t;
let c = 0;

while (true) {
    t = Number(prompt("saisir un nombre (entre 1 et 10) :"));
    c++;

    if (t > x) {
        alert("grand ");
    } else if (t < x) {
        alert("petit ");
    } else {
        alert("Vous avez trouvé en " + c+ " tentatives.");
        break;
    }
}
