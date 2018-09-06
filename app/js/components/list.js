class List {

  constructor(options) {
    this.el = options.el;
    this.tmpl = _.template(options.tmpl.innerHTML);
  }

  showList(data) {
    let result = '';

    data.forEach((item) => {
      result += this.tmpl(item);
    });

    this.el.innerHTML = result;
  }
}