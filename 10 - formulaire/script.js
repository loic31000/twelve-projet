/**
 * Event submit
 * event.preventDefault()
 * HTMLInputElement.value
 * String.prototype.trim()
 * regex
 * RegexExp.prototype.test()
 */

/**
 * 1 .Je recupère
 *      - le formulaire
 *      - le champ prenom
 *      - le champ nom
 *      - le champ email
 *      - le champ message
 */
const form = document.getElementById("formulaire");
const prenom = document.getElementById("prenom");
const nom = document.getElementById("nom");
const email = document.getElementById("email");
const message = document.getElementById("message");

// 2. Lorsque le formulaire est soumit (clique du bouton submit ou touche ENTER)
form.addEventListener("submit",function(event){
    // 3. J'annule le comportement par défaut du formulaire  : qui consiste à envoyer une requete http GET à l'adresse de l'attribut action du formualire et donc recharger la page
    event.preventDefault();

    // 4. Je recupère les valeurs des champs du formulaire
    const prenomValue = prenom.value.trim(); // je recupere la valeur du champ prenom
    const nomValue = nom.value.trim(); // je recupere la valeur du champ nom
    const emailValue = email.value.trim(); // je recupere la valeur du champ email
    const messageValue = message.value.trim(); // je recupere la valeur du champ message

    // 6. Je vérifie que les valeurs des champs sont conformes
    if(prenomValue.length < 2 || prenomValue.length > 20){
        showError(prenom);

    } // 7. Si une valeur n'est pas conforme j'affiche le message d'erreur en retirant la classe invisible de l'élément HTML qui suit le champ
    if(nomValue.length < 2 || nomValue.length > 20){
        showError(nom);

    } // 8. Si une valeur est conforme je masque le message d'erreur en ajoutant la classe invisible de l'élément HTML qui suit le champ
    if(isValidEmail(emailValue) == false){
        showError(email);

    } // 9. Si une valeur est conforme je masque le message d'erreur en ajoutant la classe invisible de l'élément HTML qui suit le champ
    if(messageValue.length < 10 || messageValue.length > 100){
        showError(message);
    }
});

// 10. Je crée une fonction qui affiche le message d'erreur
function showError(element){
    element.nextElementSibling.classList.remove("invisible");
}

// 12. Je crée une fonction qui verifie si l'email est valide
function isValidEmail(email){
    const emailFormat_str = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // Création d'un objet RegexExp
    if (emailFormat_str.test(email))
    {
        return true;
    }else{
        return false
    }
}













































/**
 * HELPERS FUNCTIONS
 */
/**
 * Renvoie vrai si la string email passé en paramètre correspond à une adresse email valide.
 */
function isValidEmail(email){
    const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // Création d'un objet RegexExp
    if (emailFormat.test(email))
    {
        return true;
    }else{
        return false
    }
}


/**
 * BONUS HORS ACTIVITE *********************************************
 * Envoyer un mail
 */
/**
 * sendMail : Fonction qui permet d'envoyer un mail
 */
function sendMail(message,from){
    const options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: `{"message":"${message}","from":"${from}"}`
      };
      
    fetch('http://localhost:3000/sendmail', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
}