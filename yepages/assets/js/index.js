import { User } from './classes/User.js';
import { Book } from './classes/Book.js';
import { BookManager } from './classes/BookManager.js';
import { UserManager } from './classes/UserManager.js';


window.addEventListener("DOMContentLoaded", function(){

    let newUserManage = new UserManager();
    newUserManage.load();

    let creationForm = document.getElementById("creationForm");
    creationForm.addEventListener("submit", function(event){
        event.preventDefault();
        newUserManage.createUser();
        newUserManage.save();

    });
    
    let connectionButton = document.getElementById("connectionButton");
    connectionButton.addEventListener("submit", function(event){
        event.preventDefault();
        newUserManage.login();

    });
});