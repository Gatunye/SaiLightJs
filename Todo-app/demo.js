/**
 * Create a structure for my application
 */

// todo structure
const todoItem = {
  todo: "I am ging to learn js",
  complete: false,
};

/**
 * get our ui
 * The document is a global javascript object
 * which is smply used to access the dom.
 * It has alot of properties which make it easier
 * to handle dom changes.
 *
 * Thw whole webpage
 */

const target = document.getElementById("target");

// a list of todo items
const todoList = [];

/**
 * Todo Template structire
 * @name todoUiTemplate
 * @param todo Item
 * @return html string
 */
const todoUiTemplate = (todoItem) => {
  return `<ul>
            ${todoList.map((todoItem) => {
              return `<li>
                    <span> ${todoItem.todo} </span>
                    <button>mar complete</button>
                  </li>`;
            })}
        </ul>`;
};

// console.log(todoUiTemplate(todoItem));

//lets try to put in in our ui
// innerHTML gives whate ever html is there
target.innerHTML = todoUiTemplate(todoItem);

// create input element
const inputElementOne = document.createElement("input");
console.log(inputElementOne);

/**
 * When ever the input changes state, this callback will be
 * returned by our even handler
 * ch time we type in the input this callback is going to be called
 */
const onChangeCallback = (event) => {
  // using the es6 js descruture to extract out a property in an object
  let { key } = event;
  console.log("the key pressed is: ", key);

  //Normal approcah to get the keypressed
  // let keyPressed = event.key;
  // console.log("Key Pressed: ", keyPressed);

  // if the key pressed is [enter] simply add a todo item
  if (key.toString().toLowerCase() === "enter") {
    
    const newTodo = {
      todo: event.target.value,
      complete: false,
    };
    
    // remove the user input text
    event.target.value = "";
    
    // i will push a new item to to the todoz.. 
    todoList.push(newTodo);

    // render my updated list 
    target.innerHTML = todoUiTemplate(todoItem);
    // update the html...
  }
};

// know when the user types in something
// This wil happen when ever we type any key inside tge input
inputElementOne.addEventListener("keyup", onChangeCallback);

const inputTarget = document.getElementById("input-target");
inputTarget.appendChild(inputElementOne);

// const inputElementTwo = `<input type='text' />`;
// console.log(inputElementTwo);

// // an objects of which the primary obj
// var names = {
//    firstname: "john",
//    lastname: "deo"
// }

// // name2 is the same names
// // its a reference variable of the primary object;
// var name2 = names;
// console.log(name2);
// name2.firstname = "Another name";

// console.log(names);

// // make a copy of an object like th
// var names_copy = {...names};
// names_copy.firstname = "Names copy";
// console.log("Names: ", names);
// console.log("Names Copy: ", names_copy);

// // another aproch
// var names_copy_2 = Object.assign({}, names);
// names_copy_2.firstname = "names copy 2";
// console.log("Names: ", names);
// console.log("Names Copy 2: ", names_copy_2);
