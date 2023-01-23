import { User } from './classes/User.js';
import { Book } from './classes/Book.js';
import { BookManager } from './classes/BookManager.js';
import { UserManager } from './classes/UserManager.js';


window.addEventListener("DOMContentLoaded", function(){

    // let book1 = new Book(0, "La reine des neiges", "Disney", 2012, 124, "Il était une fois...", "assets/img/image1.png");
    // let book2 = new Book(1, "Le roi lion", "Disney", 2010, 138, "Il était une fois...", "assets/img/image2.png");
    // let book3 = new Book(2, "La petite sirène", "Disney", 2008, 149, "Il était une fois...", "assets/img/image3.png");

    // let user1 = new User(0, "Vincento", "vincent@gmail.com", 1234, "Vincent", "Ollivier", "assets/img/image4.png");
    // let user2 = new User(1, "Natha", "nathanael@gmail.com", 2345, "Nathanaël", "Ollivier", "assets/img/image5.png");
    // let user3 = new User(2, "Clem", "clementine@gmail.com", 3456, "Clémentine", "Ollivier", "assets/img/image6.png");
    
    // let books = [book1, book2, book3];
    // let users = [user1, user2, user3];
    
    // console.log(books)
    
    // let newManage = new BookManager(books)
    // console.log(newManage)
    // newManage.save(); 
    // console.log(newManage)
    // newManage.load(); 
    // console.log(newManage.findAllBooks());
    // console.log(newManage.findBookById(2))
    // console.log(newManage.findBooksByTitle("Le roi lion"));
    // console.log(newManage.findBooksByAuthor("Disney"));
    // console.log(newManage.findBooksByPublicationYear(2012));
    // let newBook = new Book(0, "Ratatouille", "Disney", 2011, 134, "Il était une fois...", "assets/img/image9.png");
    // newManage.createBook(newBook);
    // console.log(newManage)

    // newManage.deleteBook(1);
    // console.log(newManage)
    
    // let newBook = new Book(1, "Ratatouille", "Disney", 2011, 134, "Il était une fois...", "assets/img/image9.png");
    // newManage.editBook(newBook)    
    // console.log(newManage)
    
    let users = [];
    let newUserManage = new UserManager(users);
    
    let creationForm = document.getElementById("creationForm");
    creationForm.addEventListener("submit", function(event){
        event.preventDefault();
        
        let userId =users.length;
        let userUsername = document.getElementById("userName").value;
        let userEmail = document.getElementById("email").value;
        let userPassword = document.getElementById("password").value;
        let userSecondPassword = document.getElementById("secondPassword").value;
        let userFirstName = document.getElementById("firstName").value;
        let userLastName = document.getElementById("lastName").value;
        let userProfileImage = document.getElementById("url").value;
        
        if (userPassword!==userSecondPassword){
            alert("Les deux mots de passe ne sont pas identiques")
        }
        else{
        let user = new User(userId, userUsername, userEmail, userPassword, userFirstName, userLastName, userProfileImage)
        console.log(user);
        
        newUserManage.createUser(user);
        console.log(newUserManage);
        
        }
        
        
    });
    
        
    
});