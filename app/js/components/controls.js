class Controls {

	constructor(options) {
		this.MAX_LENGTH = 2;

		this.el = options.el;
		this.searchEl = this.el.querySelector('[data-control="search"]');
		this.sortEl = this.el.querySelector('[data-control="sort-phones"]');

		this.searchEl.addEventListener('input', this.onInput.bind(this));
		this.sortEl.addEventListener('change', this.onSort.bind(this));
	}

	onInput(event) {
		const value = event.target.value;
		const controlEvent = new CustomEvent('search', {
			bubbles: true,
			detail: {
				value: ''
			}
		});

		controlEvent.detail.value = (value.length >= this.MAX_LENGTH) ? value : '';

		this.el.dispatchEvent(controlEvent);
	}

	onSort(event) {
		// console.log(event.srcElement.value);
		// const value = event.srcElement.value;
		const value = this.sortEl.options[this.sortEl.selectedIndex].value;
		const controlEvent = new CustomEvent('selectSort', {
			bubbles: true,
			detail: {
				nameSort: value
			}
		});

		this.el.dispatchEvent(controlEvent);
	}
}