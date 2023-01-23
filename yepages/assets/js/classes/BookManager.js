import { Book } from './Book.js';

class BookManager {
    #books;

    constructor(books = []) {
        this.#books = books;
    }
    get books() {
        return this.#books;
    }
    set books(books) {
        this.#books = books;
    }
    findAllBooks(){
        return this.#books;
    }
    findBookById(id){
        for (let i=0; i<this.#books.length; i++){
            if (this.#books[i].id===id){
                return this.#books[i];
            }
        }
    }
    findBooksByTitle(title){
        let byTitleList = []
        for (let i=0; i<this.#books.length; i++){
            if (this.#books[i].title===title){
                byTitleList.push(this.#books[i]);
            }
        }
        return byTitleList
    }
    findBooksByAuthor(author){
        let byAuthorList = []
        for (let i=0; i<this.#books.length; i++){
            if (this.#books[i].author===author){
                byAuthorList.push(this.#books[i]);
            }
        }
        return byAuthorList
    }
    findBooksByPublicationYear(year){
        let byYearList = [];
        for (let i=0; i<this.#books.length; i++){
            if (this.#books[i].publicationDate===year){
                byYearList.push(this.#books[i]);
            }
        }
        return byYearList
        
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
        // Je recupère la sauvegarde et je parse le tableau
        let booksBackup = JSON.parse(sessionStorage.getItem("booksBackup"));

        // Je parse chaque élément du tableau
        for (let i=0; i<booksBackup.length; i++){
            let bookBackup = JSON.parse(booksBackup[i]);
            let book = new Book(bookBackup.id, bookBackup.title, bookBackup.author, bookBackup.publicationDate, bookBackup.totalPages, bookBackup.excerpt, bookBackup.coverImage);
            this.#books.push(book);
        }
    }
}
export { BookManager };