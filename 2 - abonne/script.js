/*
Nouvelles compétences:
 - Font awesome
 - type Boolean
 - if else
 - HTMLElement.classList
    - toggle Inverse l'etat de la classe : present ou pas
    * add
    * remove
    * replace
*/

// 1. Je recupere l'icone smiley

// 2. Je recupere le bouton ABONNER

// 3. Je défini une variable binaire qui exprime l'etat abonné ou non de l'utilisateur

// 4. J'ecoute le clique sur l'icone smiley

// 5. J'ecoute l'evenemment click sur le bouton ABONNEZ



// récupérer le smiley
const smiley_elem = document.querySelector('.fa-solid');
// récupéré le button abbonement.
const button_elem = document.querySelector('.btn-sub');


smiley_elem.addEventListener('click', function () {
    smiley_elem.classList.toggle('fa-face-smile'); 
    smiley_elem.classList.toggle('happy');
});

let isSubscribed = false; 

button_elem.addEventListener("click",function(){
    button_elem.classList.toggle("abonne");
    if(isSubscribed === false){
        button_elem.innerText = "Abonné";
    }else{
        button_elem.innerText = "Abonnez-vous";
    }
    isSubscribed = !isSubscribed;

});
