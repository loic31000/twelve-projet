// 1. Je recupere le bouton
const modal_elem = document.querySelector(".modal");
// 2. Je recupere la modale
const closeBtn_elem = document.querySelector(".modal-quit");

// 3. J'affiche la modale au bout de 3 secondes
setTimeout(function(){
    modal_elem.style.display = "flex"; // J'affiche la modale
},2000); // 2000 millisecondes = 2 secondes

// 4. Je fais disparaitre la modale au clique sur la croix

closeBtn_elem.addEventListener("click",function(){
    modal_elem.style.display = "none"; // Je cache la modale
});

