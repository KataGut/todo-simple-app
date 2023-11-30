const toDos = []
let toDoText = ''
let inputtoDoName

window.addEventListener('load', function () {
  inputtoDoName = document.getElementById('toDoName')
  const buttonAddToDo = document.getElementById('addToDoBtn')

  inputtoDoName.addEventListener('change', function (event) {
    toDoText = event.target.value
  })

  buttonAddToDo.addEventListener('click', addToDo)

  inputtoDoName.addEventListener('keyup', function (event) {
    if (event.keyCode === 13) {
      addToDo()
    }
  })
})

function addToDo() {
  toDos.push(toDoText)

  const pendingsList = document.getElementById('pendingsList')
  const newLi = document.createElement('li')
  const checkBoxDoneToDo = document.createElement('input')
  const btnDelete = document.createElement('button')
  const toDoParagraph = document.createElement('p')

  if (toDoText != '') {
    checkBoxDoneToDo.setAttribute('type', 'checkbox')
    toDoParagraph.innerHTML = toDoText
    btnDelete.innerText = '❌'

    newLi.appendChild(checkBoxDoneToDo)
    newLi.appendChild(toDoParagraph)
    newLi.appendChild(btnDelete)

    pendingsList.appendChild(newLi)
  }
  clearInput()
}

function clearInput() {
  inputtoDoName.value = ''
  toDoText = ''
}
