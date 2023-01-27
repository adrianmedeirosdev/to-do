const btnNewTask = document.querySelector('#btn-new-task')
const addTaskModal = document.querySelector('#add-task-modal')
const btnCancel = document.querySelector('#btn-cancel')
const taskInput = document.querySelector('#task-input')

const addTaskForm = document.querySelector('#add-task-form')
const tasksList = document.querySelector('.tasks-list')
const emptyMessage = document.querySelector('.empty-message')

btnNewTask.onclick = () => addTaskModal.showModal()
btnCancel.onclick = () => addTaskModal.close()

addTaskForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const taskInputText = taskInput.value

  if (taskInputText) {
    saveTask(taskInputText)
  }

  feather.replace()
})

function saveTask(text) {
  emptyMessage.style.display = 'none'

  const task = document.createElement('li')
  task.classList.add('task')

  const taskText = document.createElement('h4')
  taskText.innerText = text
  task.appendChild(taskText)

  const divButtons = document.createElement('div')

  const checkBtn = document.createElement('button')
  checkBtn.classList.add('btn-check')
  checkBtn.innerHTML = '<i class="icon" data-feather="check-square"></i>'
  divButtons.appendChild(checkBtn)

  const editBtn = document.createElement('button')
  editBtn.classList.add('btn-edit')
  editBtn.innerHTML = '<i class="icon" data-feather="edit"></i>'
  divButtons.appendChild(editBtn)

  const deleteBtn = document.createElement('button')
  deleteBtn.classList.add('btn-delete')
  deleteBtn.innerHTML = '<i class="icon" data-feather="trash-2"></i>'
  divButtons.appendChild(deleteBtn)

  task.appendChild(divButtons)

  tasksList.appendChild(task)

  taskInput.value = ''
  addTaskModal.close()
}


document.addEventListener('click', (e) => {
  const targetEl = e.target
  const parentEl = targetEl.closest("li")

  if (targetEl.classList.contains('btn-check')) {
    targetEl.classList.toggle('btn-checked')
    parentEl.classList.toggle('task-done')
  }

  if (targetEl.classList.contains('btn-edit')) {

  }

  if (targetEl.classList.contains('btn-delete')) {
    parentEl.remove()
  }
})






