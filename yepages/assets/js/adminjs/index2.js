let users = [  
    {  
        id: 0,  
        isActive: false,  
        age: 24,    
        name: "Marsh Obrien" 
    },  
    {  
        id: 1,  
        isActive: false,  
        age: 21,    
        name: "Rios Gibson" 
    },  
    {  
        id: 2,  
        isActive: false,  
        age: 29,  
        name: "Morgan Buchanan"
    },  
    {  
        id: 3,  
        isActive: true,  
        age: 25,    
        name: "Franklin Dyer" 
    },  
    {  
        id: 4,  
        isActive: false,  
        age: 30, 
        name: "Keller Pitts" 
    },  
    {  
        id: 5,  
        isActive: false,  
        age: 25,  
        name: "Davenport Maddox"  
    },  
    {  
        id: 6,  
        isActive: true,  
        age: 31,  
        name: "Judith Graves"
    },  
    {  
        id: 7,  
        isActive: true,  
        age: 26,  
        name: "Hoffman Hess" 
    },  
    {  
        id: 8,  
        isActive: true,  
        age: 22,  
        name: "Sheena Goff"
    },  
    {  
        id: 9,  
        isActive: false,  
        age: 39,  
        name: "Rose Lawrence" 
    }  
];

let tbody = document.getElementById("tbody");


window.addEventListener("DOMContentLoaded", function(){

// Affichage des utilisateurs

for (user of users){
    let tr = document.createElement("tr");

    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let td5 = document.createElement("td");

    let id = document.createTextNode(user.id);
    let name = document.createTextNode(user.name);
    let age = document.createTextNode(user.age);
    // let action = document.createTextNode()

    // Affichage des icones actif ou non
    let span1 = document.createElement("span");
    span1.classList.add("bi-person-fill-up");

    let span2 = document.createElement("span");
    span2.classList.add("bi-person-fill-down");

    if (user.isActive === true){
        td4.appendChild(span1);
    }
    else if(user.isActive === false){
        td4.appendChild(span2);
    }

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
    
    td5.appendChild(a1);
    td5.appendChild(a2);
    td5.appendChild(button3);

    td1.appendChild(id);
    td2.appendChild(name);
    td3.appendChild(age);

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);

    tbody.appendChild(tr);


}

});




