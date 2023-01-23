class UserManager {
    #users;

    constructor(users) {
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
        this.#users.push(user);
    }
    deleteUser(userId){
        let usersListWithoutId = [];
        for (let i=0; i<this.#users.length; i++){
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
        sessionStorage.setItem("usersBackup", JSON.stringify(this.#users));
    }
    load(){
        // Je recupère la sauvegarde et je parse le tableau
        let usersBackup = JSON.parse(sessionStorage.getItem("usersBackup"));

        // Je parse chaque élément du tableau
        for (let i=0; i<usersBackup.length; i++){
            let userBackup = JSON.parse(usersBackup[i]);
            let user = new user(userBackup.id, userBackup.username, userBackup.email, userBackup.password, bookBackup.firstName, bookBackup.lastName, bookBackup.profileImage);
            this.#users.push(user);
        }
    }
    login(email, password){
        
    }
}
export { UserManager };