// Variaveis

const buttonOpenModal = document.getElementById("abrirModal")
const buttonCloseModal = document.getElementById("sair")
const CreateNewPerson = document.getElementById("criar")
const buttonOpenDialog = document.getElementById("deletarModal")
const buttonCloseDialog = document.getElementById("buttonCloseDialog")
const dialog = document.getElementById("dialog")
const buttonDeleteUser = document.getElementById("deletar")

// Abrir modal com display

const openModal = function openModal() {
    const modal = document.getElementById("modal")
    const estiloAtual = modal.style.display
    if(estiloAtual == "block") {
        modal.style.display = "none"
    } else {
        modal.style.display = "block"
    }
}

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


// Abrir modal com dialog

function openModalDialog() {
    dialog.showModal()
}

function closeModalDialog () {
    dialog.close()
}


// Inserir usuários na lista


function addUser() {
    var nomeInput = document.getElementById('name').value
    var emailInput = document.getElementById('email').value
    var ageInput = document.getElementById('age').value
    
    function CreateUser(nome, email, age) {
        this.name = nome
        this.email = email
        this.age = age
    }
    
    var newUser = new CreateUser(nomeInput, emailInput, ageInput) 
    
    const listUsers = []
    
    listUsers.push(newUser)
    
    function newListUsers() {
        const newUsers = listUsers.map(users => {
            return `
            <div class="divzinha">
              <p>${users.name}</p> <p>${users.email}</p> <p>${users.age}</p>
              </div>
              <br>
              `
            })       
            
            return newUsers
        }
        
    const newListUsersBody = newListUsers()

    newListUsers()
    
    var containerUsers = document.getElementById("containerUsers")
    var newDivContainer = `${newListUsersBody.join("")}`
    containerUsers.insertAdjacentHTML("beforeend", newDivContainer)
    let fecharModal = 1
    if (fecharModal = 1) {
        openModal()
    }
    
}

// Deletar usuarios da lista

function deleteUser() {
    const usuarioToBeDeleted = document.getElementById("usuarioToBeDeleted").value
    // console.log(listUsers)
    


}



