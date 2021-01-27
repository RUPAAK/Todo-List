//declare
    let addBtn= document.querySelector('.addBtn');
    let todoInput= document.querySelector('.todo-input');
    let todoMainList= document.querySelector('.todo-list');

//event
    addBtn.addEventListener('click', addTodo);
    todoMainList.addEventListener('click', checkeddelete);

//function
    function addTodo(){

        event.preventDefault();

        //create div
        let todoDiv= document.createElement('div');
        todoDiv.classList.add('todo');

        //create li
        let todoList= document.createElement('li');
        todoList.innerText=todoInput.value;
        todoList.classList.add('todoItem');
        todoDiv.appendChild(todoList);

        //create checkmark button
        let completedButton= document.createElement('button');
        completedButton.innerHTML='<i class="fas fa-check"></i>';
        completedButton.classList.add('completedBtn');
        todoDiv.appendChild(completedButton);
        
        //create delete button
        let deleteButton= document.createElement('button');
        deleteButton.innerHTML='<i class="fas fa-trash"></i>';
        deleteButton.classList.add('deletedBtn');
        todoDiv.appendChild(deleteButton);

        //append todoDiv in main container
        todoMainList.appendChild(todoDiv);

        //empty imput
        todoInput.value='';
    }


    function checkeddelete(e){
        let item= e.target;
        console.log(item);
        if(item.classList[0] === 'deletedBtn'){
            const todo= item.parentElement;
            todo.remove();
        }
        

        //check
        if(item.classList[0]== 'completedBtn'){
            let todo= item.parentElement;
            todo.classList.toggle('completed');
        }
    }