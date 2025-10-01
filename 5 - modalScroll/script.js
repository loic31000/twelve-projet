/**
 * removeEventListener
 * Scroll Event
 */

// 1. Je recupere la section à partir de laquelle je veux faire apparaite la modale
const section1_elem = document.querySelector(".one");

// 2. Je recupere la modale
const modal_elem = document.querySelector(".modal");
// 3. Je recupere le bouton quitter de la modale
const modalQuit_elem = document.querySelector(".modal-quit");

// 4. Je lance la fonction onScrollDisplayModal sur l'evenement scroll de la fenetre
window.addEventListener("scroll",onScrollDisplayModal);

// 5. Je fais disparaite la modale au clique sur la croix
modalQuit_elem.addEventListener("click",function(){
    modal_elem.style.display = "none"; // Je cache la modale

    window.removeEventListener("scroll",onScrollDisplayModal); // Je desactive l'ecoute de l'evenement scroll
});


/**
 *  Fonction à passer en parametre de addEventListener("scroll",function)
 *  Obligatoire pour pouvoir utiliser removeEventListener(function)
 */

// Fonction qui affiche la modale si on a scrollé jusqu'au centre de la section1
function onScrollDisplayModal(){

// Je recupere la hauteur de scroll actuelle
const hauteur_elem = document.documentElement.scrollTop;
if (hauteur_elem >= getCenterY(section1_elem)){ // Si j'ai scrollé jusqu'au centre de la section1
    modal_elem.style.display = "flex"; // J'affiche la modale
  }
}
// Fonction qui retourne la position verticale du centre d'un element HTML
function getCenterY(element){ // element est un HTMLElement
    return element.offsetTop + element.offsetHeight/2; 
      // offsetTop : distance entre le haut de l'element et le haut de la page
}     // offsetHeight : hauteur de l'element
      // On divise par 2 pour avoir le centre de l'element

