import { UserManager } from './classes/UserManager.js';
import { User } from './classes/User.js';

let tbody = document.getElementById("tbody");

window.addEventListener("DOMContentLoaded", function(){

    let newUserManage = new UserManager();
    newUserManage.load();

    // Affichage des utilisateurs
    for (let i=0; i<newUserManage.users.length; i++){
        let tr = document.createElement("tr");
    
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        let td4 = document.createElement("td");
        let td5 = document.createElement("td");
        let td6 = document.createElement("td");
    
        let id = document.createTextNode(newUserManage.users[i].id);
        let username = document.createTextNode(newUserManage.users[i].username);
        let email = document.createTextNode(newUserManage.users[i].email);
        let firstName = document.createTextNode(newUserManage.users[i].firstName);
        let lastName = document.createTextNode(newUserManage.users[i].lastName);
        // let action = document.createTextNode()
    
        // Affichage des icones actif ou non
        let icone1 = document.createElement("span");
        icone1.classList.add("bi-eye");
        let icone2 = document.createElement("span");
        icone2.classList.add("bi-pen");
        let icone3 = document.createElement("span");
        icone3.classList.add("bi-trash3");
        let a1 = document.createElement("a");
        let a2 = document.createElement("a");
        let button3 = document.createElement("button");
        button3.classList.add("delete-user");
        
        a1.appendChild(icone1);
        a2.appendChild(icone2);
        button3.appendChild(icone3);
        
        td6.appendChild(a1);
        td6.appendChild(a2);
        td6.appendChild(button3);
    
        td1.appendChild(id);
        td2.appendChild(username);
        td3.appendChild(email);
        td4.appendChild(firstName);
        td5.appendChild(lastName);
    
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tr.appendChild(td6);
    
        tbody.appendChild(tr);

    }


    // Supprimer un utilisateur
    
    let buttons_supprimer = document.getElementsByClassName("delete-user");
    let users = document.querySelectorAll("table > tbody > tr > td:nth-of-type(2)");
    console.log(users);
    let usersId = document.querySelectorAll("table > tbody > tr > td:nth-of-type(1)");
    console.log(usersId);
    let section1 = document.getElementById("section1");
    let section2 = document.getElementById("section2");
    let userToDelete = document.getElementById("userToDelete");
    let idToDelete

    // Je detecte l'appuie sur l'un des boutons supprimer et affiche la section de suppression
    for (let i=0; i<users.length; i++){
        buttons_supprimer[i].addEventListener("click", function(){
            // Je masque la section 1 (tableau)
            section1.classList.toggle("masked");
            // Je fait apparaitre la section 2 (le message de supression)
            section2.classList.toggle("masked");
            // J'implemente le nom de l'utilisateur dans le message de suppression
            userToDelete.innerHTML= users[i].textContent;
            idToDelete = usersId[i].textContent;

        });
    }        
    let boutonAnnulerSuppression = document.getElementById("boutonAnnulerSuppression");
    boutonAnnulerSuppression.addEventListener("click", function(){
        // Je masque la section 1 (tableau)
        section2.classList.toggle("masked");
        // Je fait apparaitre la section 2 (le message de supression)
        section1.classList.toggle("masked");
        
    });
    let boutonValiderSuppression = document.getElementById("boutonValiderSuppression");
    boutonValiderSuppression.addEventListener("click", function(){
        newUserManage.deleteUser(idToDelete);
        console.log(newUserManage)
        newUserManage.save();
        // Je masque la section 1 (tableau)
        section2.classList.toggle("masked");
        // Je fait apparaitre la section 2 (le message de supression)
        section1.classList.toggle("masked");
    });




    





});




