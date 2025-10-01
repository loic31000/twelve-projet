/**
 * let
 * 
 * 
 * element.getAttribute()
 * // const link = document.getElementById("myLink");
console.log(link.getAttribute("href")); // "https://openai.com"

 * element.setAttribute()
const image = document.getElementById("myImage");
image.setAttribute("src", "image2.jpg"); // change l’image affichée
image.setAttribute("alt", "nouvelle image"); // ajoute un attribut alt

 * ++ operator


 * operateur ternaire // condition ? valeur_si_vrai : valeur_si_faux
 * //let age = 18;
let message = (age >= 18) ? "Majeur" : "Mineur";
console.log(message); // "Majeur"


 */

// 1. Je recupere toutes les petites vignettes
const vignettes_elem = document.querySelectorAll(".small");
// 2. Je recupere la grande photo
const fullImg_elem = document.getElementById("full");

// 3. Je recupere le bouton AJOUTER
const btnAdd_elem = document.querySelector(".btn-add");

// 4. Je recupere la balise vide de message d'ajout du panier
const panierMsg_elem = document.querySelector(".panier-msg");
// 5. Je crée une variable qui contient le nombre de produits ajoutées ua panier
let panier = 0;

// 6. Je parcours toutes les petites vignettes
vignettes_elem.forEach(function(vignette){
    vignette.addEventListener("click", function(){
        // 7. Je récupère la source de la petite vignette
        const smallSrc_elem = vignette.getAttribute("src");

        // 8. Je récupère la source de la grande image
        const fullSrc_elem = fullImg_elem.getAttribute("src");

        // 9. Je remplace la source de la grande image par celle de la petite vignette
        fullImg_elem.setAttribute("src", smallSrc_elem);

        // 10. Je remplace la source de la petite vignette par celle de la grande image
        vignette.setAttribute("src", fullSrc_elem);
    });
});

// 11. Lors du click sur le bouton AJOUTER
btnAdd.addEventListener("click", function () {

    // 12. J'incrémente le nombre de produits dans le
    panier++;

    // 13. J'affiche le message d'ajout au panier
    panierMsg.style.display = "block";
    // 14. J'affiche le nombre de produits ajoutés au panier
    panierMsg.textContent = (panier === 1) ? "Produit ajouté au panier" : panier + " produits ajoutés au panier";

});

//-------------------------------------------------------------------------------------------------------------------
// Methode Massi
// // 1. Je recupere toutes les petites vignettes
// const vignettes = document.querySelectorAll(".small");
// // 2. Je recupere la grande photo
// const fullImg = document.getElementById("full");

// // 3. Je recupere le bouton AJOUTER
// const btnAdd = document.querySelector(".btn-add");

// // 4. Je recupere la balise vide de message d'ajout du panier
// const panierMsg = document.querySelector(".panier-msg");
// // 5. Je crée une variable qui contient le nombre de produits ajoutées ua panier
// let panier = 0;

// // 6. Je parcours le tableaux de vignettes
// vignettes.forEach(function(vignette){
//     // 7. Pour chaque vignette j'ecoute l'evenement click
//     vignette.addEventListener("click",function(){
//         // J'inverse les sources de la vignette et de la grande photo
//         // Je recupere
//         const vignetteSrc = vignette.getAttribute("src");
//         const fullImgSrc = fullImg.getAttribute("src");
//         // J'inverse
//         fullImg.setAttribute("src",vignetteSrc);
//         vignette.setAttribute("src",fullImgSrc);
//     });
// });

// // 8. J'ecoute l'evenement clique sur le bouton AJOUTER
// btnAdd.addEventListener("click",function(){
//     // J'incremente le panier de 1
//     panier++;
//     // J'ecris un message pour avertir l'utilisateur que l'ajout a fonctionné.
    
//     //panierMsg.innerText = "Vous avez "+panier+ (panier>1?" produits ":" produit ")+ "dans votre panier.";
//     panierMsg.innerText = `Vous avez ${panier} produit${panier>1?"s":""} dans votre panier.`;
// });


