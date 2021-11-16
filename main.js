
const myForm = document.querySelector('#manager-form');
const taskInput = document.querySelector('#task');
const msg = document.querySelector('.msg');
const taskList = document.querySelector('#task-list');
const check = document.querySelector('.inBtn');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
if (taskInput.value === '') {
  msg.classList.add('error');
  msg.innerHTML = 'No task entered';

  setTimeout(() => msg.remove(), 3000 );
}else {
  const li = document.createElement('li');
  //li.appendChild(document.createTextNode(`${taskInput.value}`));
  li.innerHTML= `<input type="checkbox" class="inBtn" value=""> ${taskInput.value}` ;
  taskList.appendChild(li).classList.add('current');
  // clear fields
  taskInput.value = '';
}
}
check.addEventListener('click', onCheck);

function onCheck(e) {
  console.log('checked a box');
  //its only monitoring the first onee
}






















//move up
