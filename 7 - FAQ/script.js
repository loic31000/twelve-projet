/**
 * firstChild
 * lastChild
 * childNodes
 * nextSibiling MAIS preferez nextElementSibiling pour eviter de selectionner les passages à la ligne
 * previousSibiling MAIS preferez previousElementSibiling  pour eviter de selectionner les passages à la ligne
 * 
 */

    // ul.firstChild : peut être un saut de ligne (texte) ou le premier <li>
    // ul.lastChild : peut être un saut de ligne (texte) ou le dernier <li>
    // ul.childNodes : liste tous les nœuds enfants (texte + éléments)
    // ul.children : liste uniquement les éléments enfants (<li>)
    // li.nextSibling : peut être un texte (saut de ligne)
    // li.previousSibling : peut être un texte (saut de ligne)
    // li.nextElementSibling : le prochain élément frère (<li>)
    // li.previousElementSibling : le précédent élément frère (<li>)


// 1. Je recupere toutes les questions
const questions_elem = document.querySelectorAll(".question");

// 2. Je parcours toutes les questions
questions_elem.forEach(function(question){
    // 3. Lors du click sur la question
    question.addEventListener("click",function(){
        // 4. Je recupere la reponse correspondante et le chevron correspondante
        const reponse_elem = question.nextElementSibling;
        const chevron_elem = question.lastElementChild;
        
        reponse_elem.classList.toggle("show-reponse");
        chevron_elem.classList.toggle("fa-chevron-up");
        chevron_elem.classList.toggle("fa-chevron-down");
    });
});
