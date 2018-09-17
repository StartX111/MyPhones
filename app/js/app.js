

if (location.hash === '' || location.hash === '#phones'){
    location.hash = 'phones';
    let page = new PageList({
        el: document.getElementById('root')
    });
} else {
    let pagePhone = new PagePhone({
        el: document.getElementById('root'),
        tmpl: document.getElementById('page-phone-tmpl'),
        id : location.hash.substring(location.hash.indexOf('/')+1)
    });
}

window.addEventListener('hashchange',function (){
    if (location.hash === '#phones'){
        let page = new PageList({
            el: document.getElementById('root')
        });
    } else {
        let pagePhone = new PagePhone({
            el: document.getElementById('root'),
            tmpl: document.getElementById('page-phone-tmpl'),
            id : location.hash.substring(location.hash.indexOf('/')+1)
        });
    }
});