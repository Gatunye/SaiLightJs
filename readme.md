# SaiLightJs - version 0.1.0
This is the first version of the library. 
It has been done with simplity to suit all beginers in javascript who would like to have state and component rendering in their applications.

## Since it has been done fo a student. 
This initail version has only one example and lets hope i will get more time to update it 
Please feel free to use it.

## Methods

- useState()
- getState()
- view()
    .point()
    .render()

## Step One
Link the javascript file to your html file or into your application <br/>
    
`
    <script src="/path-to/sai-light.js"></script>
`

` 
$name = 'some'
`
-


/**
  |--------------------INTRO-----------------------
  | LIGHT-JS TOOLKIT BY GATUNYE LUCKY 
  | This simple UI toolkit is ment to help you with simple application state management and 
  | rendering of views when this is a state update
  |  WARNING ----
  | Please do not change the store shape manually use the setState and getState to get content form the 
  | store object if you access it direclty you may break the structure.
  | Since this is a simple toolkit and this is the inital version 0.1.0 
  | Please be aware of the changes you make 
  |-------------------------------------------------
 */

/**
 * STEP ONE
 * Let us setup a simple store for our data.
 * This store is going to be a contant object,
 * Since objects store data by reference it will be great for us to use it
 */

const STORE = {
  state: {},
  prevState: {},
};

/**
 * After creating the store
 * Lets create our view store, this will be used to store the views and thire refrences
 * A view can simply be a simple ui segment that you can put into a string and then render it to the
 * The point and spects of the views will make our pages more flexiable and easy to change
 * e.g
 */
const VIEW_STORE = {
  views: [],
  history: [],
};

/**
 * @function view(component) // this function takes in function that return a string of the compoent
 * @param string component
 * View string the the view it self.
 * @example
 *  view(() => {
 *     return `<div>some html element here</div>`
 * }).point('#todo-wrapper')
 */
function view(component) {
  var _ref; // variable to hold dom referencing element
  var _view = {}; // view object
  var _name = "unamed"; // inital view name

  const assignView = () => {
    const _view_store = { ...VIEW_STORE }; // making a copy of the view_store
    // we add this condition to check if the view does not exist
    _view_store
    if (_view_store.views.indexOf(_view) === -1) {
      _view_store.views = [..._view_store.views, _view]; // add the view to the view list
      VIEW_STORE.views = _view_store.views; // update the view_store object
      render();
    }
  };

  const _render = () => {
    _view = { name: _name, component: component, ref: _ref };
    assignView();
  };
  
  return {
    point: (ref) => {
      _ref = document.querySelector(ref);
      return {
        render: _render,
        named: (name) => {
          _name = name;
          return {
            render: _render,
          };
        },
      };
    },
  };
}

/**
 * STEP TWO
 * Since we shall be updating the ui after saving data in the store.
 * We shall need to create a simple render function which will handle rendering the
 * changes to the ui
 */
function render() {
  const _views = { ...VIEW_STORE.views }; // make a copy of the store
  for (index in _views) {
    var _view = _views[index];
    _view.ref.setAttribute(
      "sai-view-update-time",
      index + "999" + _view.name + new Date().getTime()
    ); // adding a simple view attribute
    _view.ref.innerHTML = _view.component();
  }
}

/**
 * STEP FOUR
 * We need to have our store clean and fine, this means its not a good idea to simple just access it on the
 * fly, we are going to create two methods
 * ====[METHOD ONE]=====
 * @function getState()
 * this method will be used to create a copy of the actual state, since our state is an {object}
 * any change we do it will affect the actual object.
 * When it comes to reading the application state
 * ====[METHOD TWO]
 * @function setState(),
 * ====[METHOD THREE]====
 * @function prevState(),
 */

/**
 *  Get the current application state
 */
function getState() {
  const _state = { ...STORE.state };
  return _state;
}

/**
 * make an update to the state in the store object
 */
function setState(state) {
  const _prev_state = { ...STORE.state };
  const _store = { ...STORE };
  _store.prevState = _prev_state;
  _store.state = state;
  STORE.prevState = _store.prevState;
  STORE.state = _store.state;
  return render();
}

/**
  |===========PLEASE DON'T CHANGE THE ABOVE CODE UNLESS YOU KNOW WHAT YOU ARE DOING=====
 */
