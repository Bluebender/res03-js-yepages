//Supprimer un utilisateur

window.addEventListener("DOMContentLoaded", function(){

    let buttons_supprimer = document.getElementsByClassName("delete-user");
    let users = document.querySelectorAll("table > tbody > tr > td:nth-of-type(2)");
    let section1 = document.getElementById("section1");
    let section2 = document.getElementById("section2");
    let userToDelete = document.getElementById("userToDelete");

    // Je detecte l'appuie sur l'un des boutons supprimer et affiche la section de suppression
    for (let i=0; i<users.length; i++){
        buttons_supprimer[i].addEventListener("click", function(){
            // Je masque la section 1 (tableau)
            section1.classList.toggle("masked");
            // Je fait apparaitre la section 2 (le message de supression)
            section2.classList.toggle("masked");
            // J'implemente le nom de l'utilisateur dans le message de suppression
            userToDelete.innerHTML=users[i].textContent;
        });
    }        

    let boutonAnnulerSuppression = document.getElementById("boutonAnnulerSuppression");
    boutonAnnulerSuppression.addEventListener("click", function(){
        // Je masque la section 1 (tableau)
        section2.classList.toggle("masked");
        // Je fait apparaitre la section 2 (le message de supression)
        section1.classList.toggle("masked");
    });

});




