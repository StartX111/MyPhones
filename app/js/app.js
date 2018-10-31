let pageSelect = function () {
	if (location.hash === '' || location.hash === '#phones') {
		location.hash = '#phones';
		let page = new PageList({
			el: document.getElementById('root'),
			templ: document.getElementById('templ')
		});
	} else {
		let pagePhone = new PagePhone({
			el: document.getElementById('root'),
			tmpl: document.getElementById('page-phone-tmpl'),
			id: location.hash.substring(location.hash.indexOf('/') + 1)
		});
	}
};

pageSelect();

window.addEventListener('hashchange', pageSelect);