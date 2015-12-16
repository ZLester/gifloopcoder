define(["libs/quicksettings"], function(QuickSettings) {
	var panel = null;

	function init(model, controller) {
		infoPanel = QuickSettings.create((window.innerWidth - 150) / 2, 100, "GIF Loop Coder");
		infoPanel.addInfo("Info", "Howdy! Welcome to GIF Loop Coder (GLC). This program is offered free and is open source. Lots of hours went into it, so if you find it useful, pay it back or pay it forward.");
		infoPanel.addInfo("tips", "<a href='https://www.paypal.me/bit101'>Buy me a beer (or two)</a>");
		infoPanel.addInfo("keys", "Keys:<br/>Ctrl-Space - play/pause<br/>Ctrl-F - choose file<br/>Ctrl-R - reload file<br/>Ctrl-G - make gif<br/>Ctrl-S - capture still")
		infoPanel.addInfo("credits", "Credits:");
		infoPanel.addInfo("creator", "Architect, coding, design, etc.: Keith Peters, kp@bit-101.com");
		infoPanel.addInfo("testers", "Contributors: <a href='https://twitter.com/p5art'>Jerome Herr</a>, <a href='https://twitter.com/cacheflowe'>Justin Gitlin</a>, <a href='https://twitter.com/andremichelle'>Andre Michelle</a>, <a href='https://twitter.com/msurguy'>Maks Surguy</a>, <a href='https://github.com/EduardoLopes'>Eduardo Lopes</a>, <a href='https://github.com/crummy'>Malcolm Crum</a>, <a href='https://github.com/Landerson352'>Lincoln Anderson</a>");
		infoPanel.addInfo("encoder", "GIF Encoder: Kevin Weiner, Thibault Imbert, Kevin Kwok, Johan Nordberg");
		infoPanel.addInfo("QS", "User interface created with <a href='https://github.com/bit101/quicksettings'>QuickSettings.js</a>.");
		infoPanel.addInfo("codemirror", "Code editor: <a href='https://codemirror.net/'>https://codemirror.net/</a>")
		infoPanel.addButton("Close", function() {
			infoPanel.hide();
		});
		infoPanel.hide();
	}

	function show() {
		infoPanel.show();
	}

	function setPosition(x, y) {
		infoPanel.setPosition(x, y);
	}

	return {
		init: init,
		setPosition: setPosition,
		show: show
	};
});