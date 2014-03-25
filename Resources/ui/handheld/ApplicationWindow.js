function ApplicationWindow(title) {
	var self = Ti.UI.createWindow({
		title : title,
		backgroundColor : '#2EB98E',
		backgroundImage : '/images/u16_normal.png',
		fullscreen : true,
		navBarHidden : true
	});

	var image = Titanium.UI.createImageView({
		image : '/images/u6_normal.png',
		top : 0,
		backgroundColor : 'white',
		width : Titanium.UI.FILL
	});

	var fb = require('facebook');
	fb.appid = 220589901475687;
	fb.permissions = ['publish_stream'];
	fb.forceDialogAuth = true;
	fb.addEventListener('login', function(e) {
		if (e.success) {
			Titanium.API.info(e.data);
			//Call a export function
			var win = require('ui/data').getUserDetailsWin;
			var userDetailsWin = new win();
			userDetailsWin.open();
			alert(e.data);
		}
	});
	fb.addEventListener('logout', function(e) {
		alert('No hay sesión');
	});

	self.add(image);
	self.add(fb.createLoginButton({
		bottom : 100,
		style : fb.BUTTON_STYLE_WIDE
	}));

	// button.addEventListener('click', function() {
	// //containingTab attribute must be set by parent tab group on
	// //the window for this work
	// self.containingTab.open(Ti.UI.createWindow({
	// title : L('newWindow'),
	// backgroundColor : 'white'
	// }));
	// });

	return self;
};

module.exports = ApplicationWindow;
