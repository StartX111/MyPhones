class PageList {

  constructor(options) {
    this.MAX_LENGTH = 2;

    this.el = options.el;
    this.hash = options.hash;
    this.phones = phones;

    this.controls = new Controls({
      el: this.el.querySelector('[data-component="phones-control"]')
    });

    this.list = new List({
      el: this.el.querySelector('[data-component="phones-list"]'),
      tmpl: document.getElementById('phone-item-tmpl')
    });

    if (!this.hash){
        this.list.showList(this.phones);
    }


    this.controls.el.addEventListener('search', this.search.bind(this));
  }


  search(event) {
    const value = event.detail.value;

    if (value.length >= this.MAX_LENGTH) {
      const re = new RegExp(value, 'i');

      const filteredPhones = this.phones.filter((phone) => {
        return re.test(phone.name);
      });

      this.list.showList(filteredPhones);

    } else {
      this.list.showList(this.phones);
    }
  }
}