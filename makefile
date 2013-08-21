deformity.min.js: deformity.js
	uglifyjs --compress --mangle --output '$@' '$<'
