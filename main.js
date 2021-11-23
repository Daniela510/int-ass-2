
const myForm = document.querySelector('#manager-form');
const taskInput = document.querySelector('#task');
const msg = document.querySelector('.msg');
const taskList = document.querySelector('#task-list');

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
  console.log(this);
  // clear fields
  taskInput.value = '';
}
}
taskList.addEventListener('click', onCheck);

function onCheck(e) {
  console.log('checked a box');
  console.log(this);
}






















//move up
