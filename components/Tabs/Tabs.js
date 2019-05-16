class Tabs {
  constructor() {
    this.links = document.querySelectorAll('.tabs-links .tabs-link[data-tab]');
    this.selectedTabNum = document.querySelector('.tabs-links .tabs-link-selected').dataset.tab - 1;
    this.tabLink = [];
    this.links.forEach( (link, i) => {
      link.addEventListener('click', event => { this.deselect(this.selectedTabNum); });
      this.tabLink[i] = new TabLink(link);
    })
  }

  setSelectedTab(tabNum) {
    this.selectedTabNum = tabNum - 1;
  }

  deselect(event) {
    this.tabLink[this.selectedTabNum].deselect(this.selectedTabNum);
  }
}

class TabLink {
  constructor(element) {
    this.element = element;
    this.data = element.dataset.tab;
    this.itemElement = document.querySelector(`.tabs-items .tabs-item[data-tab="${this.data}"]`);
    this.tabItem = new TabItem(this.itemElement);
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
    this.element = element;
  }

  select() {
    this.element.classList.add('tabs-item-selected');
  }

  deselect() {
    this.element.classList.remove('tabs-item-selected');
  }
}

const pageTabs = new Tabs('pageTabs');