document.addEventListener("DOMContentLoaded", () => {
    const addButton = document.getElementById('add-button');
    const textInputField = document.getElementById('text-input-field');
    const todosContainer = document.querySelector('.todos-container');

    addButton.addEventListener('click', () => {
        const todoText = textInputField.value.trim();
        if (todoText) {
            const todoItemContainer = document.createElement('div');
            todoItemContainer.classList.add('todo-item-container');

            const todoTextElement = document.createElement('p');
            todoTextElement.classList.add('todo-text');
            todoTextElement.textContent = todoText;

            const completeButton = document.createElement('button');
            completeButton.textContent = 'Complete';
            completeButton.classList.add('complete');
            completeButton.addEventListener('click', () => {
                todoTextElement.classList.toggle('completed');
            });

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.classList.add('delete');
            deleteButton.addEventListener('click', () => {
                todosContainer.removeChild(todoItemContainer);
            });

            todoItemContainer.appendChild(todoTextElement);
            todoItemContainer.appendChild(completeButton);
            todoItemContainer.appendChild(deleteButton);
            todosContainer.appendChild(todoItemContainer);

            textInputField.value = '';
        }
    });

    textInputField.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addButton.click();
        }
    });
});
