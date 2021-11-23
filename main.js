
const myForm = document.querySelector('#manager-form');
const taskInput = document.querySelector('#task');
const msg = document.querySelector('.msg');
const taskList = document.querySelector('#task-list');


// adding a task
myForm.addEventListener('submit', onSubmit);

//removing a task
taskList.addEventListener('click', removeTask);

function onSubmit(e) {
  e.preventDefault();
if (taskInput.value === '') {
  msg.classList.add('error');
  msg.innerHTML = 'No task entered';

  setTimeout(() => msg.remove(), 3000 );
}else {
  const li = document.createElement('li');
  //li.appendChild(document.createTextNode(`${taskInput.value}`));
  li.innerHTML= `<div class="bitches"><button class="btn-small"></button> <p> ${taskInput.value} </p></div> <button id="delete" class="delete">X</button>` ;
  taskList.appendChild(li).classList.add('current');
  console.log(this);
  // clear fields
  taskInput.value = '';
}
}

function removeTask(e) {
  if (e.target.classList.contains('delete')) {
    const li = e.target.parentElement;
    taskList.removeChild(li);
  }
}






















//move up
