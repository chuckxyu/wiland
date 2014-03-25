function ApplicationTabGroup(Window) {
	//create module instance
	var self = Ti.UI.createTabGroup();

	//create app tabs
	var win1 = new Window(L('home'));

	var tab1 = Ti.UI.createTab({
		title: L('home'),
		window: win1
		
	});

	self.addTab(tab1);
	return self;
};

module.exports = ApplicationTabGroup;
