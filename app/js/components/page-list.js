class PageList {

    constructor(options) {
        this.MAX_LENGTH = 2;

        this.el = options.el;

        this.phones = phones;
        this.localPhones = this.phones;

        try{
            this.controls = new Controls({
                el: this.el.querySelector('[data-component="phones-control"]')
            });
        } catch (e) {// add control panel if it does not exist
               this.el.innerHTML = `<div class="container">
                        <div class="row">
                            <div data-component="phones-control" class="col-md-2">
                                <div class="form-group">
                                    <label for="search-phones">Search:</label>
                                    <input class="form-control" type="text" data-control="search" id="search-phones">
                                    <label for="search-phones">Sorting:</label>
                                    <select class="form-control" id="sort-phones">
                                        <option selected value="age">age</option>
                                        <option value="sort-A-Z">name a-z</option>
                                        <option value="sort-Z-A">name z-a</option>
                                    </select>
                                </div>
                            </div>
                
                            <div class="col-md-9 offset-1">
                                <ul data-component="phones-list"></ul>
                            </div>
                        </div>
                    </div>`;
            this.controls = new Controls({
                el: this.el.querySelector('[data-component="phones-control"]')
            });
        }



        this.list = new List({
            el: this.el.querySelector('[data-component="phones-list"]'),
            tmpl: document.getElementById('phone-item-tmpl')
        });

        this.list.showList(this.localPhones);

        this.controls.el.addEventListener('search', this.search.bind(this));

        this.selectSort = document.getElementById('sort-phones');
        this.selectSort.addEventListener('change', ()=>{
            this.list.showList(this.localPhones);
        });
    }


    search(event) {
        const value = event.detail.value;

        if (value.length >= this.MAX_LENGTH) {
            const re = new RegExp(value, 'i');
            const filteredPhones = this.phones.filter((phone) => {
                return re.test(phone.name);
            });
            this.localPhones = filteredPhones;
            this.list.showList(filteredPhones);
        } else {
            this.localPhones = this.phones;
            this.list.showList(this.phones);
        }
    }


}