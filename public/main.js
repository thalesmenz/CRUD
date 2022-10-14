const listUsers = [
    {id:1, name:"ghostface", age: 23},
    {id:2, name: "coringaKK", age: 56},
 ]


const newUser = {
    id: 3,
    name: "thales",
    age: 16
}





const openModal = function openModal() {
    const modal = document.getElementById("modal")
    const estiloAtual = modal.style.display
    if(estiloAtual == "block") {
        modal.style.display = "none"
    } else {
        modal.style.display = "block"
    }
}

const buttonOpenModal = document.getElementById("abrirModal")
const buttonCloseModal = document.getElementById("criar")

buttonOpenModal.onclick = (event) => {
    const modal = document.getElementById('modal')
    if (event.target = modal) {
        openModal()
    }
}

buttonCloseModal.onclick = (event) => {
    const modal = document.getElementById('modal')
    if (event.target = modal) {
        openModal()
    }
}

function newListUsers() {
    const newUsers = listUsers.map(users => {
        return `
        <div class="divzinha">
        <p>${users.id}</p>  <p>${users.name}</p> <p>${users.age}</p>
        </div>
         <br>
         `
    })       

    return newUsers
}

const newListUsersBody = newListUsers()

function addUser() {
    listUsers.push(newUser)
    console.log()
    newListUsers()
    console.log(listUsers)
    var containerUsers = document.getElementById("containerUsers")
    var newDivContainer = `${newListUsersBody.join("")}`
    containerUsers.insertAdjacentHTML("beforeend", newDivContainer)

}



