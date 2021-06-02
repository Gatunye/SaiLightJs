/**
 * List of components
 */
const componentsList = [
  {
    listItem: `<li class="list-group-item">Column</li>`,
    component: {
      tag: "div",
      children: "Text content",
      classes: "col-12 col-sm-12 col-md-12 col-lg-12",
    },
  },
];

/**
 * Empty section template
 */
const sectionTemplate = {
  id: "section1",
  hasChildren: false,
  textContent: "New section template",
};

/**
 * sections list
 */
const website = {
  title: "title here",
  description: "description here",
  pages: [
    {
      page: "1",
      sections: [
        {
          id: "section1",
          hasChildren: true,
          children: [
            {
              type: "div",
              attributes: "",
              classes: "",
              id: "section-1-child-1",
              hasChildren: false,
              textContent: "This is my simple text",
            },
            {
              type: "div",
              attributes: "",
              classes: "",
              id: "section-1-child-1",
              hasChildren: true,
              textContent: "This is my simple text",
              children: [
                {
                  type: "h1",
                  attributes: "",
                  classes: "",
                  id: "section-1-child-1",
                  hasChildren: false,
                  textContent: "Hello word",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

/**
 * @name renderSectionChildren
 * @description Renders the child component or section basing on the section o
 */
function renderSectionChildren(children) {
  return children.map((child, index) => {
    const { type, hasChildren, textContent, children } = child;
    switch (type) {
      case "div":
        return `<div>${
          hasChildren === true ? renderSectionChildren(children) : textContent
        }</div>`;

      default:
        return `<${type}>${
          hasChildren === true ? renderSectionChildren(children) : textContent
        }</${type}>`;
    }
  });
}

/**
 * Render out webpage
 */
function renderWebpage(page, target) {
  target = document.querySelector(target);
  console.log(target);
  target.innerHTML = page.sections.map((section, index) => {
    console.log;
    if (section.hasChildren == true) {
      return `<section class="container section" id=${
        section.sectionId + index
      }>${renderSectionChildren(section.children)}</section>`;
    }
    return `<section class="container section empty-section" id=${
      section.sectionId + index
    }></section>`;
  });
}

renderWebpage(website.pages[0], "#web-page");

function addSection(pageIndex, section, sectionId = "default") {
  if (sectionId == "default") {
    website.pages[pageIndex].sections.push(section);
  }
  renderWebpage(website.pages[pageIndex], "#web-page");
}

document.querySelector("#new-section").addEventListener("click", () => {
  addSection(0, sectionTemplate);
});

/**
 * Web page is going to be here...
 */
const webPage = []; // simple array of sections i thier order

/**
 * Renderings Engine
 * @params component: component, target: dom element
 */
function renderUi(component, target) {}

/**
 * Editor Web page editor
 */
function uiEditor(component, target) {}

/**
 * Render components to components list
 */
function renderComponentsList($target_id) {
  // get the target element from the ui.
  const target = document.querySelector($target_id);
  target.innerHTML = componentsList.map((component) => {
    return component.listItem;
  });
}

/**
 * Funtions call.
 */
renderComponentsList("#components-list");
