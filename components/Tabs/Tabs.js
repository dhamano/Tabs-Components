class Tabs {
  constructor() {
    this.links = Array.from(document.querySelectorAll('.tabs-links .tabs-link[data-tab]'));
    this.tabLink = this.links.map( link => {
      link.addEventListener('click', event => { this.deselect(); });
      let temp = new TabLink(link);
      if(link.classList.contains('tabs-link-selected')) { Tabs.selectedTab = temp; }
      return temp;
    })
  }

  static setSelectedTab(tabObj) { Tabs.selectedTab = tabObj; }
  deselect() { Tabs.selectedTab.deselect(); }
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
    Tabs.setSelectedTab(this);
  }

  deselect() {
    this.element.classList.remove('tabs-link-selected');
    this.tabItem.deselect();
  }
}

class TabItem {
  constructor(element) {
    this.element = element;
  }

  select() { this.element.classList.add('tabs-item-selected'); }
  deselect() { this.element.classList.remove('tabs-item-selected'); }
}

const pageTabs = new Tabs('pageTabs');