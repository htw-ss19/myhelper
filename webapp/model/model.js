sap.ui.define([
	"sap/ui/core/mvc/XMLView"
], function (XMLView) {
	"use strict";

	XMLView.create({
		viewName: "final-project-portal.webapp.view.Login"
	}).then(function (oView) {
		oView.placeAt("content");
	});

});

// sap.ui.define([
// 	"sap/ui/model/json/JSONModel",
// 	"sap/ui/Device"
// ], function (JSONModel, Device) {
// 	"use strict";

// 	return {
// 		createDeviceModel : function () {
// 			var oModel = new JSONModel(Device);
// 			oModel.setDefaultBindingMode("OneWay");
// 			return oModel;
// 		}
// 	};
// });