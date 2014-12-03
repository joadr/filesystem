Package.describe({
	name: 'orionjs:filesystem',
	summary: 'Filesystem for orionjs',
	version: '0.0.4',
	git: ' /* Fill me in! */ '
});

Package.onUse(function(api) {
	api.versionsFrom('1.0');

	api.use([
		'orionjs:admin@0.1.2', 
		'meteor-platform',
		'aldeed:collection2@2.0.0',
		]);

	api.addFiles([
		'lib/main.js',
		'lib/collection/init.js',
		'lib/collection/methods.js',
		'lib/routes.js',
		]);

	api.addFiles([
		'lib/register.js',
		'lib/client/views/index/index.html',
		'lib/client/views/index/index.js',
		'lib/client/views/index/index.less',
		'lib/client/views/show/show.html',
		'lib/client/views/show/show.js',
		'lib/client/views/create/create.html',
		'lib/client/views/create/create.js',
		'lib/client/views/create/create.less',
		'lib/client/views/delete/delete.html',
		'lib/client/views/delete/delete.js',
		], 'client');

	api.addFiles([
		'lib/collection/publications.js',
		], 'server');
});

Package.onTest(function(api) {
	api.use('tinytest');
	api.use('orionjs:filesystem');
});
