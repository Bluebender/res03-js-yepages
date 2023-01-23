import { Book } from './Book.js';

class BookManager {
    #books;

    constructor(books) {
        this.#books = [];
    }
    get books() {
        return this.#books;
    }
    set books(books) {
        this.#books = books;
    }
    findAllBooks(){
        for (let i=0; i<this.#books.length; i++){
            return this.#books[i];
        }
    }
    findBookById(id){
        
    }
    findBooksByTitle(title){
        
    }
    findBooksByAuthor(author){
        
    }
    findBooksByPublicationYear(year){
        
    }
    createBook(book){
        
    }
    deleteBook(bookId){
        
    }
    editBook(book){
        
    }
    save(){
        sessionStorage.setItem("booksBackup", JSON.stringify(this.#books));
    }
    load(){
        console.log(this.#books)
        // Je recupère la sauvegarde et je parse le tableau
        let booksBackup = JSON.parse(sessionStorage.getItem("books"));

        // Je parse chaque élément du tableau
        for (let i=0; i<booksBackup.length; i++){
            let bookBackup = JSON.parse(booksBackup[i]);
            let book = new Book(bookBackup.id, bookBackup.title, bookBackup.author, bookBackup.publicationDate, bookBackup.totalPages, bookBackup.excerpt, bookBackup.coverImage);
            this.#books.push(book);
        }
    }
}
export { BookManager };