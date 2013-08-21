function deformity(url, params) {
	(function(document, form, iter, param, input) {
		form = document.createElement('form');
		form.method = 'post';
		form.action = url;

		for (iter = 0; iter < params.length; ++iter) {
			param = params[iter];

			input = document.createElement('input');
			input.type = 'hidden';
			input.name = param[0];
			input.value = param[1];

			form.appendChild(input);
		}

		document.getElementsByTagName('body')[0].insertBefore(form);
		form.submit();
	})(document);
}
