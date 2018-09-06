class PagePhone {

  constructor(options) {
    this.el = options.el;
    this.tmpl = _.template(options.tmpl.innerHTML);
    this.locHash = options.locHash;
    this.id = this.locHash.substring(this.locHash.indexOf('!/') + 2);

    if (!!this.id){
        this.init();
    }

  }

  init() {
    const phone = phones.find((phoneItem) => phoneItem.id === this.id);
    this.el.innerHTML = this.tmpl(phone);
  }
}