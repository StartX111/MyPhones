class List {

    constructor(options) {
        this.el = options.el;
        this.tmpl = _.template(options.tmpl.innerHTML);
    }

    showList(data) {
        let result = '';
        let sort = document.getElementById('sort-phones');

        switch (sort.options[sort.selectedIndex].value) {
            case('age'):
                data.sort(function compareAge(personA, personB){
                    return personA['age'] - personB['age'];
                });
                break;
            case('old age'):
                data.sort(function compareAge(personA, personB){
                    return personB['age'] - personA['age'];
                });
                break;
            case('sort-A-Z'):
                data.sort(function compareAge(personA, personB){
                    return personA['name'].toLowerCase() > personB['name'].toLowerCase();
                });
                break;
            case('sort-Z-A'):
                data.sort(function compareAge(personA, personB){
                    return personA['name'].toLowerCase() > personB['name'].toLowerCase();
                });
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