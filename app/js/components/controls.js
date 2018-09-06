class Controls {

  constructor(options) {
    this.el = options.el;
    this.searchEl = this.el.querySelector('[data-control="search"]');

    this.searchEl.addEventListener('input', this.onInput.bind(this));
  }

  onInput(event) {
    const value = event.target.value;

      const controlEvent = new CustomEvent('search', {
        bubbles: true,
        detail: {
          value: value
        }
      });

      this.el.dispatchEvent(controlEvent);
    }
}