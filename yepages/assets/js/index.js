import { User } from './classes/User.js';
import { Book } from './classes/Book.js';
import { BookManager } from './classes/BookManager.js';


window.addEventListener("DOMContentLoaded", function(){

    let book1 = new Book(0, "La reine des neiges", "Disney", 2012, 124, "Il était une fois...", "assets/img/image1.png");
    let book2 = new Book(1, "Le roi lion", "Disney", 2010, 138, "Il était une fois...", "assets/img/image2.png");
    let book3 = new Book(2, "La petite sirène", "Disney", 2008, 149, "Il était une fois...", "assets/img/image3.png");

    let user1 = new User(0, "Vincento", "vincent@gmail.com", 1234, "Vincent", "Ollivier", "assets/img/image4.png");
    let user2 = new User(1, "Natha", "nathanael@gmail.com", 2345, "Nathanaël", "Ollivier", "assets/img/image5.png");
    let user3 = new User(2, "Clem", "clementine@gmail.com", 3456, "Clémentine", "Ollivier", "assets/img/image6.png");
    
    let books = [book1, book2, book3];
    let users = [user1, user2, user3];
    
    // console.log(books)
    
    let newManage = new BookManager(books)
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
 
});