/*
Nouvelles compétences:
- forEach
- querySelectorAll
*/

// 1. Je recupere le switch
const buttonDark_elem = document.querySelector(".switch");
// 2. Je recupere l'icone
const icon_elem = document.querySelector(".icon");
// 3. Je recupere tout les elements html de ma page
const switchBtn_elem = document.querySelector(".btn");



buttonDark_elem.addEventListener("click", function () // 4. J'ecoute l'evenement "click" sur le switch
{
    icon.classList.toggle("fa-sun"); // 5. Je recupere l'icone
    icon.classList.toggle("fa-moon"); // 6. inverse l'apparence de l'icone
}); 

buttonDark.addEventListener("click", function () // 7. J'ecoute l'evenement "click" sur le switch
{
   const allTags = document.querySelectorAll("*"); // 8. Je recupere tout les elements html de ma page
    allTags.forEach(function(dark_toggle) // 9. Je parcours tout les elements
    { 
        dark_toggle.classList.toggle("darkmode"); // 10. j'applique le dark mode sur l'element
    });
});