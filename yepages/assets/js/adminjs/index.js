// Menu et sous menus

let btn_utilisateur = document.getElementById("btn_utilisateur");
let menu_utilisateur = document.getElementById("menu_utilisateur");
let btn_produits = document.getElementById("btn_produits");
let menu_produits = document.getElementById("menu_produits");
let btn_categorie = document.getElementById("btn_categorie");
let menu_categorie = document.getElementById("menu_categorie");

let btn_nav = document.getElementById("btn_nav");
let menu_nav = document.getElementById("menu_nav");

let section_header = document.getElementById("section_header");
let section1 = document.getElementById("section1");
let section2 = document.getElementById("section2");

function afficherLesSousMenus (bouton, menu){
    bouton.addEventListener("click", function(event){
       menu.classList.toggle("hidden"); 
    });
}

window.addEventListener("DOMContentLoaded", function(){

// Ouverture des sous-menus
afficherLesSousMenus(btn_utilisateur, menu_utilisateur);
afficherLesSousMenus(btn_produits, menu_produits);
afficherLesSousMenus(btn_categorie, menu_categorie);

// Ouverture du menu principale
afficherLesSousMenus(btn_nav, menu_nav);
afficherLesSousMenus(btn_nav, section_header);
afficherLesSousMenus(btn_nav, section1);
afficherLesSousMenus(btn_nav, section2);
});



