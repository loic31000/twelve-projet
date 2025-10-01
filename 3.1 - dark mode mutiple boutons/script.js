
//1. Je recupere tout les switchs

//2. Je recupere tout les elements html de ma page

//3. Je parcours tout les switchs

//-----------------------------------------------------------------------------------


// 1. Je recupere tout les switchs
const switchbtns_elem = document.querySelectorAll(".switch");
//2. Je recupere tout les elements html de ma page
const allElements_elem = document.querySelectorAll("*");


//3. Je parcours tout les switchs
switchbtns_elem.forEach(function (switchbtns_elem) {

//4. Pour chaque switch, j'ecoute l'evenement "click" sur chaque switch
    switchbtns_elem.addEventListener("click", function () {

//5. je recupere toute les icones
        const icones_elem = document.querySelectorAll(".icon");

//6. Je parcours les icones
        icones_elem.forEach(function (icone) {

//7. J'inverse l'apparence de l'icone
            icone.classList.toggle("fa-moon");
        });
//8. Je parcours tout les elements
        allElements_elem.forEach(function (element) {

//9. j'applique le dark mode sur tout les elements
            console.log("1")

//10. j'applique le dark mode sur l'element
            element.classList.toggle("darkmode");

        })
    })
})





