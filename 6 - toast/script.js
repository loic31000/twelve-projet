/**
 * document.createElement()
 * element.classList.add()
 * element.innerHTML
 * elemParent.appendChild(elemEnfant)
 * element.remove()
 * setTimeout()
 */

// 1. Je recupere le bouton
const btn = document.querySelector("button");
// 2. Je recupere le conteneur de toasts
const ctnToasts_elem = document.querySelector(".container-toasts");

// 3. J'ecoute le clique sur le bouton
btn.addEventListener("click", function () {
    // 4. Je crée un toast au clique sur le bouton
    createToast();
});

// Fonction qui crée un toast
function createToast() {
    // 1. je define le toast
    const toast_elem = document.createElement("div");
    // 2. Je lui ajoute la classe toast
    toast_elem.classList.add("toast");
    // 3. Je lui ajoute le contenu HTML
    toast_elem.innerHTML = ("<p>Votre fichier est sauvegardé !<p>")

    // 2. J'ajoute le toast au conteneur
    ctnToasts_elem.appendChild(toast_elem);

    // 3. Je fais disparaitre le toast après 3 secondes
    setTimeout(function () {
        // 4. Je supprime le toast
        toast_elem.remove();
        // 5. Je peux aussi faire disparaitre le toast au clique dessus
    }, 3000);
    // 6. Je fais disparaitre le toast au clique dessus
    toast_elem.addEventListener('click', function () {
        toast_elem.remove();
    })
}

//------------------------------------------------------------------------------------

// code Massi
// const btn_elem = document.querySelector("button");

// const ctnToasts = document.querySelector(".container-toasts");

// btn_elem.addEventListener('click', function () {
//     const toast_elem = document.createElement("div");
//     toast_elem.classList.add('toast');
//     toast_elem.innerHTML = ("<p>Votre fichier est sauvegardé !<p>");
//     toast_elem.appendChild(toast);
// })

// setTimeout(function () {
//     toast_elem.remove();
// }, 3000);
// toast_elem.addEventListener('click', function () {
//     toast_elem.remove();
// });