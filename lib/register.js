orion.admin.addSidebarTab({
	routeName: 'adminFilesIndex',
	navbarTitle: 'Files',
	activeRouteRegex: 'adminFiles'
});

orion.admin.addAdminSubscription(orion.subs.subscribe('admin-files'));