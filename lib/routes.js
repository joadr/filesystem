Router.map(function() {

	this.route('adminFilesIndex', {
		path: '/admin/files',
		layoutTemplate: 'adminLayout',
		loadingTemplate: 'adminLoading',
		onBeforeAction: AccountsTemplates.ensureSignedIn,
		waitOn: function () {
			return orion.admin.adminSubscriptions;
		},
		data: function() {
			return this.params;
		}
	});

	this.route('adminFilesCreate', {
		path: '/admin/files/create',
		layoutTemplate: 'adminLayout',
		loadingTemplate: 'adminLoading',
		onBeforeAction: AccountsTemplates.ensureSignedIn,
		waitOn: function () {
			return orion.admin.adminSubscriptions;
		}
	});

	this.route('adminFilesShow', {
		path: '/admin/files/:_id',
		layoutTemplate: 'adminLayout',
		loadingTemplate: 'adminLoading',
		onBeforeAction: AccountsTemplates.ensureSignedIn,
		waitOn: function () {
			return orion.admin.adminSubscriptions;
		},
		data: function() {
			return {
				file: orion.filesystem.files.get(this.params._id)
			}
		}
	});

	this.route('adminFilesDelete', {
		path: '/admin/files/:_id/delete',
		layoutTemplate: 'adminLayout',
		loadingTemplate: 'adminLoading',
		onBeforeAction: AccountsTemplates.ensureSignedIn,
		waitOn: function () {
			return orion.admin.adminSubscriptions;
		},
		data: function() {
			return {
				file: orion.filesystem.files.get(this.params._id)
			}
		}
	});

});