var newTaskEl = document.getElementById('new-task')
var taskList = document.getElementById('task-list')
var inbox = new List('inbox')

function addTask(e, list = inbox){
  e.preventDefault()
  if(e.which === 13){
    var newTask = new Task(this.value)
    list.addTask(newTask)
    printTask(this.value)
    this.value = ""
    console.table(list.tasks)
  }
}

newTaskEl.addEventListener('keyup',addTask)
