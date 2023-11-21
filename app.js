const toDos = []
let toDoText = ''

window.addEventListener('load', function () {
  const inputtoDoName = document.getElementById('toDoName')
  const buttonAddToDo = document.getElementById('addToDoBtn')

  inputtoDoName.addEventListener('change', function (event) {
    toDoText = event.target.value
  })

  buttonAddToDo.addEventListener('click', addToDo)
})

function addToDo() {
  toDos.push(toDoText)

  const pendingsList = document.getElementById('pendingsList')
  const newLi = document.createElement('li')
  newLi.innerHTML = toDoText

  pendingsList.appendChild(newLi)
}
