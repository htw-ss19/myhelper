sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
	"use strict";
	return Controller.extend("myhelper.controller.Login", {
		onInit: function () {},
		/**
		 *@memberOf uc.UserCkeck.controller.View1
		 */
		checkUser: function (oEvent) {
			var user = this.byId('benutzer').getValue();
			sap.m.MessageToast.show("Benutzername/E-Mail " + user + " " + this._validateUser(user));
		},
		_validateUser: function (sUserName) {
			var aUsers = ["Max", "Jana", "Thomas"]; // should retrieved from somewhere, e.g., JSON file or Model
			return aUsers.indexOf(sUserName) > -1;
		}
	});
});
