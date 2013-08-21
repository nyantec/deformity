function deformity(url, params) {
	(function(document, form, key, input) {
		form = document.createElement('form');
		form.method = 'post';
		form.action = url;

		for (key in params) {
			input = document.createElement('input');
			input.type = 'hidden';
			input.name = key;
			input.value = params[key];

			form.appendChild(input);
		}

		document.getElementsByTagName('body')[0].insertBefore(form);
		form.submit();
	})(document);
}
