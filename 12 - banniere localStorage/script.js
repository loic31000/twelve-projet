/**
 * localStorage
 * setItem()
 * getItem()
 * Fonctionnement de Stockage et des cookies
 */

// Je recupere le bouton "Accepter les cookies"
const acceptBtn_elem = document.querySelector(".btn-accept");
// Je recupere la banniere de cookies
const cookiesBanner_elem = document.querySelector(".cookies");

// Verifier si l'utilisateur a deja accepté les cookies
const banniereCookieValue_elem = localStorage.getItem("banniereCookie");
// Si oui, je n'affiche pas la bannière
if(banniereCookieValue_elem){ 
    // Supprimer la bannière de cookies
    cookiesBanner_elem.remove();
}
// J'ecoute l'evenement "click" sur le bouton "Accepter les cookies"
acceptBtn_elem.addEventListener("click",function(e){
    // Je rend transparent la bannière pour effectuer une jolie animation de "fadeOut", chose impossible avec la proprieté "display:none"
    cookiesBanner_elem.style.opacity = 0;
    // Je supprime la bannière du DOM au bout de 1 seconde (le temps de l'animation)
    localStorage.setItem("banniereCookie","accept");
});
