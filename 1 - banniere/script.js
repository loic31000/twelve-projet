/*
Nouvelles compétences:
- querySelector // Selectionne le premier element seulement mieux que getElementsBy
- HTMLElement.style 
*/

// 1. Je recupere le bouton "Accepter les cookies"

// 2. Je recupere la banniere de cookies

// 3. J'ecoute l'evenement "click" sur le bouton "Accepter les cookies"

const banner_elem = document.querySelector(".cookies");
// get button
const btn_elem = document.querySelector(".btn-accept");
// click button
btn_elem.addEventListener("click",function(){
//Disparaitre banniere
    banner_elem.style.opacity = 0;
    setTimeout(function(){
        banner_elem.remove();
    },1000);
});


