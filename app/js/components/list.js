class List {

    constructor(options) {
        this.el = options.el;
        this.tmpl = _.template(options.tmpl.innerHTML);
    }

    showList(data) {
        let result = '';
        let sort = document.getElementById('sort-phones');

        switch (sort.options[sort.selectedIndex].value) {
            case('no sorting'):
                break;
            case('age'):
                data.sort(function(a,b){
                    
                });
                console.log('age');

                break;
            case('sort-A-Z'):
                console.log('A-Z');
                data.reverse();
                break;
            case('sort-Z-A'):
                console.log('Z-A');
                data.reverse();
                break;
            default:
                break;
        }

        data.forEach((item) => {
            result += this.tmpl(item);
        });
        this.el.innerHTML = result;
    }
}