class Tabs {
  constructor(varName) {
    this.varName = varName
    this.links = document.querySelectorAll('.tabs-links .tabs-link[data-tab]');
    this.selectedTabNum = document.querySelector('.tabs-links .tabs-link-selected').dataset.tab - 1;
    this.tabLink = [];
    this.links.forEach( (link, i) => {
      link.addEventListener('click', event => { this.deselect(this.selectedTabNum); });
      this.tabLink[i] = new TabLink(link,varName);
    })
    console.log('first run',this.selectedTabNum);
  }

  setSelectedTab(tabNum) {
    this.selectedTabNum = tabNum - 1;
  }

  deselect(event) {
    this.tabLink[this.selectedTabNum].deselect(this.selectedTabNum);
  }
}

class TabLink {
  constructor(element, varName) {
    // Assign this.element to the passed in DOM element
    this.element = element;

    // Get the custom data attribute on the Link
    this.data  = element.dataset.tab;

    // Using the custom data attribute get the associated Item element
    this.itemElement = document.querySelector(`.tabs-items .tabs-item[data-tab="${this.data}"]`);
    
    // Using the Item element, create a new instance of the TabItem class
    this.tabItem = new TabItem(this.itemElement);

    // Add a click event listener on this instance, calling the select method on click
    this.element.addEventListener('click', () => this.select() );
  };

  select() {
    this.element.classList.add('tabs-link-selected');
    this.tabItem.select();
    pageTabs.setSelectedTab(this.data);
  }

  deselect(selectNum) {
    this.element.classList.remove('tabs-link-selected');
    this.tabItem.deselect();
  }
}

class TabItem {
  constructor(element) {
    // Assign this.element to the passed in element
    this.element = element;
  }

  select() {
    this.element.classList.add('tabs-item-selected');
  }

  deselect() {
    this.element.classList.remove('tabs-item-selected');
  }
}

/* START HERE: 

- Select all classes named ".tabs-link" and assign that value to the links variable

- With your selection in place, now chain a .forEach() method onto the links variable to iterate over the DOM NodeList

- In your .forEach() method's callback function, return a new instance of TabLink and pass in each link as a parameter

*/

const pageTabs = new Tabs('pageTabs');