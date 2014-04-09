'use strict';

module.exports = function(app) {
	// Root routing
	var core = require('../../app/controllers/core');
	app.get('/', core.index);

	app.get('/about', core.index);
	app.get('/ibog', core.index);
	app.get('/vink', core.index);
	app.get('/portal', core.index);
	app.get('/yellowoffice', core.index);
	app.get('/verdo', core.index);
	app.get('/easytv', core.index);
};