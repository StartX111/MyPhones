
let locHash = location.hash;

const page = new PageList({
    el: document.getElementById('root'),
    hesh: locHash
});

const pagePhone = new PagePhone({
    el: document.getElementById('root'),
    tmpl: document.getElementById('page-phone-tmpl'),
    locHash: locHash
});
