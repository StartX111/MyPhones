class PageList {

	constructor(options) {

		this.el = options.el;
		this.el.innerHTML = _.template(options.templ.innerHTML)();

		this.phones = phones;
		this.localPhones = this.phones;

		this.controls = new Controls({
			el: this.el.querySelector('[data-component="phones-control"]')
		});

		this.list = new List({
			el: this.el.querySelector('[data-component="phones-list"]'),
			tmpl: document.getElementById('phone-item-tmpl')
		});

		this.list.showList(this.localPhones);

		this.controls.el.addEventListener('search', this.search.bind(this));
		this.controls.el.addEventListener('selectSort', this.sort.bind(this));

	}


	search(event) {
		const value = event.detail.value;
		if (value){
			const re = new RegExp(value, 'i');
			const filteredPhones = this.phones.filter((phone) => {
				return re.test(phone.name);
			});
			this.list.showList(this.localPhones = filteredPhones);
		} else {
			this.list.showList(this.localPhones = this.phones);
		}
	}

	sort(event) {
		switch (event.detail.nameSort) {
			case('age'):
				this.localPhones.sort(function compareAge(personA, personB){
					return personA['age'] - personB['age'];
				});
				break;
			case('old age'):
				this.localPhones.sort(function compareAge(personA, personB){
					return personB['age'] - personA['age'];
				});
				break;
			case('name-A-Z'):
				this.localPhones.sort(function compareAge(personA, personB){
					return personA['name'].toLowerCase().localeCompare(personB['name'].toLowerCase());
				});
				break;
			case('name-Z-A'):
				this.localPhones.sort(function compareAge(personA, personB){
					return personB['name'].toLowerCase().localeCompare(personA['name'].toLowerCase());
				});
				break;
			default: break;
		}

		this.list.showList(this.localPhones);
	}

}