
const myForm = document.querySelector('#manager-form');
const taskInput = document.querySelector('#task');
const msg = document.querySelector('.msg');
const taskList = document.querySelector('#task-list');
const remove = document.querySelector('#remove');


// adding a task
myForm.addEventListener('submit', onSubmit);

//removing a task or marking as done
taskList.addEventListener('click', aChange);

//remove ALL
remove.addEventListener('click', remAll);

function onSubmit(e) {
  e.preventDefault();
if (taskInput.value === '') {
  msg.classList.add('error');
  msg.innerHTML = 'No task entered';

  setTimeout(() => msg.remove(), 3000 );
}else {
  const li = document.createElement('li');
  //li.appendChild(document.createTextNode(`${taskInput.value}`));
  li.innerHTML= `<div class="bitches"><button class="btn-small c"></button> <p> ${taskInput.value} </p></div> <button id="delete" class="delete">X</button>` ;
  taskList.appendChild(li).classList.add('current');
  console.log(this);
  // clear fields
  taskInput.value = '';
}
}

function aChange(e) {
  const t = e.target;
  if (t.classList.contains('delete')) {
    const li = t.parentElement;
    taskList.removeChild(li);
  }else{
  const li = t.parentElement.parentElement;
     if (t.classList.contains('c')){
        // task is getting done
        t.classList='btn-small d';
        t.innerHTML = "&check;";
        t.nextElementSibling.classList = 'struck';
        li.classList = "done";

console.log('a current task');
    } else {if (t.classList.contains('d')){
        // task is marked undone
        t.classList='btn-small c';
        t.innerHTML = "";
        t.nextElementSibling.classList = '';
        li.classList = "current";

console.log('a done task');
      }
    }
  }
}

function remAll() {
  const li = document.querySelectorAll('li');
  for (var i = 0; i < li.length; i++) {
    taskList.removeChild(li[i]);
  }
}





















//move up
