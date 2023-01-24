import { UserManager } from './classes/UserManager.js';
import { User } from './classes/User.js';

let tbody = document.getElementById("tbody");

window.addEventListener("DOMContentLoaded", function(){

    let newUserManage = new UserManager();
    newUserManage.load();

    // Affichage des utilisateurs
    for (let i=0; i<newUserManage.users.length; i++){
        console.log(newUserManage.users[i].username)
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

});




