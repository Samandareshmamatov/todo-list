let userForm = document.querySelector(".user-form")
let firstName = document.querySelector("#firstName")
let age = document.querySelector("#age");
let address = document.querySelector("#address");
let addBtn = document.querySelector(".addBtn");
let box = document.querySelector(".box")
let arr = [];


addBtn.addEventListener("click", function(e) {
        e.preventDefault()
        if (firstName.value.length === 0 || age.value.length === 0 || address.value.length === 0) {
            alert("First enter Information in the input")
        } else {
            let obj = {
                id: Math.round(Math.random() * 1000),
                userName: firstName.value,
                userAge: age.value,
                userAdress: address.value
            };
            arr.push(obj);
            firstName.value = "";
            age.value = "";
            address.value = "";
            addUser(arr);
        }
    }

)


function deleteUser(id) {
    let newArr = arr.filter((item) => item.id !== id)
    arr = newArr;
    addUser(arr)
}

function editUser(id) {
    for (let i = 0; i < arr.length; i++) {
        if (id === arr[i].id) {
            firstName.value = `${arr[i].userName}`
            age.value = `${arr[i].userAge}`
            address.value = `${arr[i].userAdress}`
            addBtn.style.display = 'none';
            let editUserBtn = document.createElement("button");
            if (userForm.childNodes[9]) {

            } else {
                editUserBtn.innerHTML = "Edit User"
                editUserBtn.classList.add("editUserBtn")
                userForm.append(editUserBtn)

                editUserBtn.addEventListener("click", () => {
                    if (firstName.value.length === 0 || age.value.length === 0 || address.value.length === 0) {
                        alert("First enter Information in the input")
                    } else {
                        arr[i].userName = firstName.value;
                        arr[i].userAge = age.value;
                        arr[i].userAdress = address.value;
                        editUserBtn.remove()
                        addBtn.style.display = 'inline-block';
                        addUser()
                        firstName.value = "";
                        age.value = "";
                        address.value = "";
                    }
                });

            }

        }
    }
}

function addUser() {
    box.innerHTML = "";
    arr.forEach(obj => {
        let innerText = document.createElement("p")
        innerText.innerHTML = `
    • ${obj.userName} <br>
    • ${obj.userAge} <br>
    • ${obj.userAdress} <br>
    <button class="deleteBtn" onclick="deleteUser(${obj.id})">Delete</button>
    <button class="editBtn" onclick="editUser(${obj.id})">Edit</button>
  `
        box.append(innerText)
    })
}