/**
 * STEP ONE -- Create the initail application state
 * Please use these steps to achive the best in your application
 */

setState({
  todos: [
    // {todo:  todo, completed: false}
  ],
  students: [
    { name: "Stacy", age: 34 },
    { name: "Stacy", age: 34 },
    { name: "Stacy", age: 34 },
  ],
});

/**
 * create a ui component that has the html code
 * since we need to have automatic update to the application we shall use the getState insde our component
 */
const TodoComponent = () => {
  // we shall use this functioni to get the state stored in the global store
  const state = getState();
  var list = ""; // avariable to hold the todos after the irritating through the array
  for (var index in state.todos) {
    var todo = state.todos[index];
    list += `
     <li class="todo-item">
        <div class="todo ${todo.completed ? "completed" : ""}" >
            ${todo.todo}
        </div>
        <div class="todo-actions">
          <div>
            <button type="button" onClick="deleteTodo(${index})" class="delete">
                Delete
            </button>
            <button type="button" class="complete" onClick="markTodoComplete(${index})">
                ${todo.completed ? "Mark Incomplete" : "Mark Compelete"}"
            </button>
          </div>
        </div>
      </li>
    `;
  }
  return list;
};



/**
 * USE CASE ONE 
 * We can choose to pass in the name of the function such that it is called by refrence 
 * @function view(TodoComponent).point("#todo-wrapper").named("odo-list-view").render();
 * You can use the above example simply copy the function call 
 * [.point()] method will take the [ id | classname | or any other attribute  ]
 */
// view(TodoComponent).point("#todo-wrapper").named("todo-list-view").render();

/* USE CASE TWO
 * call the view function to render the view initally
 * at the call of this function the view will be stored inside
 */
view(function () {
  // we shall use this functioni to get the state stored in the global store
  const state = getState();
  var list = ""; // avariable to hold the todos after the irritating through the array
  for (var index in state.todos) {
    var todo = state.todos[index];
    list += `
     <li class="todo-item">
        <div class="todo ${todo.completed ? "completed" : ""}" >
            ${todo.todo}
        </div>
        <div class="todo-actions">
          <div>
            <button type="button" onClick="deleteTodo(${index})" class="delete">
                Delete
            </button>
            <button type="button" class="complete" onClick="markTodoComplete(${index})">
                ${todo.completed ? "Mark Incomplete" : "Mark Compelete"}"
            </button>
          </div>
        </div>
      </li>
    `;
  }
  if (list == "") {
    list = "<p>You dont have any todo </P>";
  }
  return list;
})
  .point("#todo-items-wrapper")
  .named("todo-list-view")
  .render();

/**
 * Adding some action
 * here we shall get the content fom the todo and update the state 
 * Once we update the state the render method will be automatically called 
 */
const input = document.getElementById('add-todo-input')
const add_todo_button = document.getElementById('add-todo-button');

add_todo_button.addEventListener('click', event => {

  // get the todo item from the input value
  const todo = input.value;

  //let us get the state 
  var  state = getState();

  // affter geting our application state we push a new item to the todos
  // state.todos = [...state.todos, {todo:  todo, completed: false}]
  state.todos.push({todo:  todo, completed: false})

  //affter pushing a new item we call setState(state) method in order to update the state  
  setState(state);

  input.value = ""

})

/**
 * When we delete the todo
 */
function deleteTodo(index){
  var  state = getState();
  var newTodoList = [];
  for (var _index in state.todos) {
    if (_index == index) {
      continue;
    }
    newTodoList.push(state.todos[_index]);
  }
  state.todos = newTodoList;
  setState(state)
}

function markTodoComplete(index){
  var state = getState();
  state.todos[index].completed = !state.todos[index].completed;
  setState(state);
}