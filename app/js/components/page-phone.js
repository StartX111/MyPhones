class PagePhone {

    constructor(options) {
        this.el = options.el;
        this.tmpl = _.template(options.tmpl.innerHTML);
        this.id = options.id;

        this.init();
    }

    init() {
        const phone = phones.find((phoneItem) => phoneItem.id === this.id);
        this.el.innerHTML = this.tmpl(phone);
    }
}