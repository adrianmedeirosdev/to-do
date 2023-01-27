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
  if (taskInput.value != "") {
    emptyMessage.style.display = 'none'
    tasksList.innerHTML += `
    <li class="task" >${taskInput.value}
      <div>
        <button class="btn-check"><i class="icon" data-feather="check-square"></i></button>
        <button class="btn-edit"><i class="icon" data-feather="edit"></i></button>
        <button class="btn-delete"><i class="icon" data-feather="trash-2"></i></button>
      </div>
    </li>
  `
  }
  taskInput.value = ''
  feather.replace()
  addTaskModal.close()
  e.preventDefault()
})

// tasksList.addEventListener('click', (e) => {

// })






