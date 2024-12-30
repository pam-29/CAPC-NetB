// Je récupère mon bouton qui a l'identifiant "open-menu";
var buttonOpenMenu = document.getElementById("open-menu");
// Je récupère mon bouton qui a l'identifiant "close-menu";
var buttonCloseMenu = document.getElementById("close-menu");
// Je récupère mon bouton qui a l'identifiant "header";
var header = document.getElementById("main-header");

console.log(header)

// J'ajoute un écouteur d'événement pour déclencher une action au "click"
buttonOpenMenu.addEventListener("click", openMenu);

// J'ouvre le menu en lui ajoutant une class CSS
function openMenu () {
  header.classList.add("menu-is-opened");
}

// J'ajoute un écouteur d'événement pour déclencher une action au "click"
buttonCloseMenu.addEventListener("click", closeMenu);

// Je ferme le menu en lui retirant une class CSS
function closeMenu () {
  header.classList.remove("menu-is-opened");
}
