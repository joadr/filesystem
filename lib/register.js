orion.admin.addSidebarTab({
	routeName: 'adminFilesIndex',
	navbarTitle: 'Files',
	activeRouteRegex: 'adminFiles',
	icon: 'folder'
});

orion.admin.addAdminSubscription(orion.subs.subscribe('admin-files'));