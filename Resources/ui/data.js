var data = {};
function setData(obj) {
	data = obj;
}

function getData() {
	return data;
}

module.exports.getUserDetailsWin = function() {

	//Creates a new window
	var empDetailsWin = Ti.UI.createWindow({
		backgroundColor : '#2EB98E',
		backgroundImage : '/images/u16_normal.png'
	});

	var textArea = Ti.UI.createTextArea({
		
		color : '#888',
		font : {
			fontSize : 20,
			fontWeight : 'bold'
		},
		
		width : Titanium.UI.FILL,
		height : Titanium.UI.FILL,
		editable: false
		
	});
	
	var fb = require('facebook');
	fb.appid = 220589901475687;
	fb.permissions = ['publish_stream'];
	
	
	fb.addEventListener('logout', function(e) {
	});
	
	empDetailsWin.add(textArea);
	empDetailsWin.add(fb.createLoginButton({
		bottom : 100,
		style : fb.BUTTON_STYLE_WIDE
	}));

	return empDetailsWin;
};

// The special variable 'exports' exposes the functions as public
module.exports.setData = setData;
module.exports.getData = getData; 