
// 1. Je recupere le burger
const burger_elem = document.querySelector(".burger");
// 2. Je recupere la fenetre modal
const modal_elem = document.querySelector(".modal");

burger_elem.addEventListener('click', function () {

modal_elem.classList.toggle("show-modal")
burger_elem.classList.toggle("fa-x")
})

