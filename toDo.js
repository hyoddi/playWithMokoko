const toDoIcon = document.getElementById('toDo-icon');
const todoPopup = document.getElementById('todo-popup');
const closeTodoBtn = document.querySelector('.close-todo');
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

toDoIcon.addEventListener('click', () => {
  todoPopup.style.display = 'block';
});

closeTodoBtn.addEventListener('click', () => {
  todoPopup.style.display = 'none';
});

todoForm.addEventListener('submit', (e) => { // 할 일 추가 누르면,
  e.preventDefault();
  const text = todoInput.value.trim(); 
  if (text !== '') { // 입력값이 비어있지 않으면
    const li = document.createElement('li'); // 새로운 할 일 생성

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', () => {
      li.classList.toggle('completed');
    });

    const span = document.createElement('span');
    span.textContent = text;

    const deleteBtn = document.createElement('button'); // 추가된 할 일 옆에 삭제 버튼 생성
    deleteBtn.textContent = '-';
    deleteBtn.style.color = 'red';
    deleteBtn.addEventListener('click', () => {
      li.remove(); // 삭제 버튼 클릭하면 삭제
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);
    todoList.appendChild(li);

    todoInput.value = '';
  }
});
