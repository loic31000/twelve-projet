/**
 * Template string `${}`
 * innerHTML ou template
 * += operator
 */

// 1. Je recupere le conteneur de publications
const postsContainer_elem = document.querySelector(".posts");

// 2. Voici ma base de données factise 
const posts_arr = 
[
    {
        titre:"SEO, les bonnes pratiques",
        hashtag:"#SEO",
        link:"#",
        extrait:"Mollit ut mollit esse exercitation nisi ut labore velit anim pariatur sit deserunt anim. Dolore consequat aliquip esse elit culpa aliqua. Consectetur mollit irure minim incididunt nulla non. Ad sunt mollit aliqua minim fugiat et minim commodo. Anim proident incididunt veniam duis cupidatat irure eu. Elit nulla nisi ea laborum mollit excepteur enim ut Lorem. Cupidatat minim consectetur mollit in ut consectetur est duis do sint cillum nisi."
    },
    {
        titre:"Bien, les bonnes pratiques",
        hashtag:"#JS",
        link:"#",
        extrait:"Mollit ut mollit esse exercitation nisi ut labore velit anim pariatur sit deserunt anim. Dolore consequat aliquip esse elit culpa aliqua. Consectetur mollit irure minim incididunt nulla non. Ad sunt mollit aliqua minim fugiat et minim commodo. Anim proident incididunt veniam duis cupidatat irure eu. Elit nulla nisi ea laborum mollit excepteur enim ut Lorem. Cupidatat minim consectetur mollit in ut consectetur est duis do sint cillum nisi."
    },
    {
        titre:"Content, les bonnes pratiques",
        hashtag:"#PHP",
        link:"#",
        extrait:"Mollit ut mollit esse exercitation nisi ut labore velit anim pariatur sit deserunt anim. Dolore consequat aliquip esse elit culpa aliqua. Consectetur mollit irure minim incididunt nulla non. Ad sunt mollit aliqua minim fugiat et minim commodo. Anim proident incididunt veniam duis cupidatat irure eu. Elit nulla nisi ea laborum mollit excepteur enim ut Lorem. Cupidatat minim consectetur mollit in ut consectetur est duis do sint cillum nisi."
    }
];

// 3. Je boucle sur ma base de données pour afficher les publications
posts_arr.forEach(function(post){

   // 4. Je crée le template de chaque publication
    const postAdd_str = `
         <div class="post">
            <div class="post-titre">
                <a href="${post.link}">${post.titre}</a> 
            </div>
            <div class="post-extrait">
                ${post.extrait}
            </div>
            <div class="post-hashtag">
                ${post.hashtag}
            </div>
        </div> 
        `; 

        // 5. J'injecte le template dans le conteneur de publications
    postsContainer_elem.innerHTML+=postAdd_str;

});



