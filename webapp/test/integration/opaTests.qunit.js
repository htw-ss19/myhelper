/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"myhelper/myhelper/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});