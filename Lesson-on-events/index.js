/**
 * Lets try to access the dom
 * The whole dom is inside the [document] Object
 */
const dom = document; // this has the who web page
console.log("The document is here ", dom); // outpt the document and see what happens 

// The dom has alot of meesge and for us to be able to 
// access any many we use to dot access specifier. 
// lets get thw whole content inside of bod
const body = dom.body
console.log("Body: ", dom);

/**
 * SELECTORS 
 * these are document properties which are methods used 
 * to access the dom. They help us to access our html elemns in the most simple.
 */

// we can be able to use the document.getElementById('id');
// to simply get a particular element by its id
const H4 = document.getElementById('el-1');
console.log("elemnt go by id: ", H4);

// this is alos the same and getElement b id but it takes a query of 
// either [id, tagname, attribute, classname]
const element = document.querySelector('#el-1');

// we going to play with this simple element
element.style = "color: red; font-size: 20px";

/**
 * I would like to expose all the properties of my 
 * element
 * ## Element is an object with so many properties 
 * like element[style, clientWidth, appendChild, innerHTML]
 */
// for(var key in element){
//     console.log("\nKey: ", key)
// }

/**
 * Try to see some usr interaction
 * I wil have to know whe the user has done something to the page
 * Events.... What are they
 */
let h4Element = document.querySelector('#el-1');
// addEventListener // for adding listers
// removeEventListener // removing listers
// The addevent listener takes in two paramenters
// param1 sis the event
// param 2 is the callback function

// const callback = (e) => {};
// h4Element.addEventListener('click', callback)
h4Element.addEventListener('click', (event) =>{
   h4Element.style = `font-size: ${Math.round(Math.random(9) * 100)}px`;
})
