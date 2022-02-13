const form = document.querySelector('.form');
const input = document.querySelector('#input-todo');
const btnSubmit = document.querySelector('button');
const todoList = document.querySelector('.todo-list');

form.addEventListener('submit', function (e) {
  e.preventDefault();
});

function alertEmptyTodo() {
  let timerId = setInterval(() => (alert.style = `display: block;`), 100);
  setTimeout(() => {
    clearInterval(timerId);
    alert.style.display = 'none';
  }, 2000);
}

btnSubmit.addEventListener('click', function () {
  if (input.value !== '') {
    let myTodoList = document.createElement('div');
    myTodoList.classList.toggle('todo-output');
    todoList.append(myTodoList);
    myTodoList.innerText = input.value;
    input.value = '';

    myTodoList.addEventListener('click', () => {
      myTodoList.remove();
    });
  } else {
    return alert('Введите текст!');
  }
});
