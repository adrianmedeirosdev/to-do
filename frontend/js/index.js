const taskInput = document.querySelector('#task-input')
const addTaskForm = document.querySelector('#add-task-form')
const tasksList = document.querySelector('.tasks-list')
const emptyMessage = document.querySelector('.empty-message')

let tasks = new Array()

window.onload = () => {
  getTasksFromLocalStorage()
  getThemeFromLocalStorage()
}

async function getTasksFromLocalStorage() {
  const tasks = await JSON.parse(localStorage.getItem('tasks'))
  tasks ? renderTasks(tasks) : console.log('No tasks found')
}


const renderTasks = (tasks) => {
  tasks.forEach(task => {
    saveTask(task)
  })
  feather.replace()
}

const saveTasksToLocalStorage = (tasks) => {
  localStorage.setItem('tasks', JSON.stringify(tasks))
}

addTaskForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const taskInputText = taskInput.value

  if (taskInputText) {
    saveTask(taskInputText)
  }

  feather.replace()
})


const saveTask = (text) => {
  emptyMessage.style.display = 'none'

  const task = document.createElement('li')
  task.classList.add('task')



  const taskText = document.createElement('h4')
  taskText.innerText = text
  task.appendChild(taskText)

  const divButtons = document.createElement('div')

  const checkBtn = document.createElement('button')
  checkBtn.classList.add('btn-check')
  divButtons.appendChild(checkBtn)

  const editBtn = document.createElement('button')
  editBtn.classList.add('btn-edit')
  divButtons.appendChild(editBtn)

  const deleteBtn = document.createElement('button')
  deleteBtn.classList.add('btn-delete')
  divButtons.appendChild(deleteBtn)

  task.appendChild(divButtons)

  tasksList.appendChild(task)

  taskInput.value = ''
  taskInput.focus()

  tasks.push(task.innerText)

  saveTasksToLocalStorage(tasks)
}


document.addEventListener('click', (e) => {
  const targetEl = e.target
  const parentEl = targetEl.closest("li")

  if (targetEl.classList.contains('btn-check')) {
    targetEl.classList.toggle('btn-checked')
    parentEl.classList.toggle('task-done')
  }

  if (targetEl.classList.contains('btn-edit')) {
    taskInput.value = parentEl.innerText
    parentEl.remove()
  }

  if (targetEl.classList.contains('btn-delete')) {
    tasks.forEach(task => {
      if (task == parentEl.innerText) {
        tasks.splice(tasks.indexOf(task), 1)
      }
    })
    saveTasksToLocalStorage(tasks)
    parentEl.remove()
    if (tasksList.innerText == '')
      emptyMessage.style.display = 'flex'
  }


})






