const container = document.getElementById("container");
const p = document.createElement("p");
p.textContent = "Ceci est un paragraphe";
container.appendChild(p);
p.textContent = "Le texte a été modifié";
p.style.backgroundColor = "lightblue";
p.style.textAlign = "center";
container.addEventListener("click", function () {
    p.textContent = "Un clic a été détecté";
});
