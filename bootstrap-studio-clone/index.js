/**
 * List of components 
 */
const componentsList = [
    {
        listItem: `<li class="list-group-item">Column</li>`,
        component: {
            tag: 'div',
            children: "Text content",
            classes: "col-12 col-sm-12 col-md-12 col-lg-12"
        }
    }
];

/**
 * sections list
 */
const sections = [

];

/**
 * Function to add a new section to my ui
 */
function addSection(){
    const sectionUiFrame = `<div class="col-12 section"> new section </div>`
    sections.push(sectionUiFrame);
}

/**
 * 
 */
const sectionTemplate = ``;



/**
 * Web page is going to be here... 
 */
const webPage = []; // simple array of sections i thier order

/**
 * Renderings Engine
 * @params component: component, target: dom element
 */
function renderUi(component, target){

}

/**
 * Editor Web page editor
 */
function uiEditor(component, target){

}


/**
 * Render components to components list
 */
function renderComponentsList($target_id){
    // get the target element from the ui. 
    const target = document.querySelector($target_id);
    target.innerHTML = componentsList.map((component) => {
        return component.listItem;
    })
}

/**
 * Funtions call.
 */
renderComponentsList("#components-list");