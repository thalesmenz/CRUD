// Variaveis

const buttonOpenModal = document.getElementById("abrirModal")
const buttonCloseModal = document.getElementById("sair")
const CreateNewPerson = document.getElementById("criar")  

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
            <div class="listaContainer">
              <p class="classN">${users.name}</p> <p class="classN">${users.email}</p> <p class="classN">${users.age}</p>
              </div>
              <br>
              `
            })       
            
            return newUsers
        }
        
    const newListUsersBody = newListUsers()

    newListUsers()

    if(nomeInput != '' && emailInput != "" && ageInput != '') {
        var containerUsers = document.getElementById("containerUsers")
        var newDivContainer = `${newListUsersBody.join("")}`
        containerUsers.insertAdjacentHTML("beforeend", newDivContainer)
        let fecharModal = 1
        if (fecharModal = 1) {
            openModal()
        }
    }
    
    
}





