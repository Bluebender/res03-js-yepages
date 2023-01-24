import { User } from './User.js';

class UserManager {
    #users;

    constructor(users = []) {
        this.#users = users;
    }
    get users() {
        return this.#users;
    }
    set users(users) {
        this.#users = users;
    }

    findAllUsers(){
        return this.#users;
    }
    findUserById(id){
        for (let i=0; i<this.#users.length; i++){
            if (this.#users[i].id===id){
                return this.#users[i];
            }
        }
    }
    findUserByUsername(username){
        let byUserNameList = []
        for (let i=0; i<this.#users.length; i++){
            if (this.#users[i].username===username){
                byUserNameList.push(this.#users[i]);
            }
        }
        return byUserNameList
    }
    findUserByEmail(email){
        for (let i=0; i<this.#users.length; i++){
            if (this.#users[i].email===email){
                return this.#users[i];
            }
        }
    }
    createUser(user){

        let userId = this.#users.length+1;
        let userUsername = document.getElementById("userName").value;
        let userEmail = document.getElementById("email").value;
        let userPassword = document.getElementById("password").value;
        let userSecondPassword = document.getElementById("secondPassword").value;
        let userFirstName = document.getElementById("firstName").value;
        let userLastName = document.getElementById("lastName").value;
        let userProfileImage = document.getElementById("url").value;

        let doublonEmail=false
        for (let i=0; i<this.#users.length; i++){
            if (this.#users[i].email===userEmail){
                doublonEmail=true;    
            }
        }

        if (userPassword!==userSecondPassword){
            alert("Les deux mots de passe ne sont pas identiques");
        }
        else if (doublonEmail===true){
            alert("L'adresse email existe déjà");
        }
        else{
            let user = new User(userId, userUsername, userEmail, userPassword, userFirstName, userLastName, userProfileImage)
            this.#users.push(user);
        }
    }
    deleteUser(userId){
        let usersListWithoutId = [];
        for (let i=0; i<this.#users.length; i++){
            console.log(this.#users[i].id)
            console.log(userId)
            if (this.#users[i].id!==userId){
                usersListWithoutId.push(this.#users[i]);
            }
        }
        this.#users = usersListWithoutId
    }
    editUser(user){
        for (let i=0; i<this.#users.length; i++){
            if (user.id === this.#users[i].id){
                this.#users[i] = user;
            }
        }
    }
    save(){
        localStorage.setItem("usersBackup", JSON.stringify(this.#users));
    }
    load(){
        // Je recupère la sauvegarde et je parse le tableau
        let usersBackup = JSON.parse(localStorage.getItem("usersBackup"));

        // Je parse chaque élément du tableau
        if (usersBackup===null){
            this.#users=[];
        }
        else{
            for (let i=0; i<usersBackup.length; i++){
                let userBackup = JSON.parse(usersBackup[i]);
                let user = new User(userBackup.id, userBackup.username, userBackup.email, userBackup.password, userBackup.firstName, userBackup.lastName, userBackup.profileImage);
                this.#users.push(user);
            }
        }
    }
    login(){
        let userEmail = document.getElementById("connexionEmail").value;
        let userPassword = document.getElementById("connexionPassword").value;
        for (let i=0; i<this.#users.length; i++){
            if (this.#users[i].email===userEmail && this.#users[i].password===userPassword){
                alert("Vous êtes bien connecté");
                break;
            }
            else{
                alert("Votre connexion a échouée");
                break;
            }
        }
    }
}
export { UserManager };