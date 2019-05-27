sap.ui.define(["sap/ui/core/mvc/Controller"],
 function (Controller) {
	"use strict";
	return Controller.extend("myhelper.webapp.controller.Login", {
		checkUser: function (oEvent) {
			var user = this.byId("emailLogin").getValue();
			this.byId("password").getValue();
			sap.m.MessageToast.show("Benutzername/E-Mail " + user + " " + this._validateUser(user));
		},
		_validateUser: function (sUserName) {
			var aUsers = ["Max", "Jana", "Thomas"]; // should retrieved from somewhere, e.g., JSON file or Model
			return aUsers.indexOf(sUserName) > -1;
		},
		_openHome: function() {
		sap.ui.view({id:"",viewName:"myhelper.webapp.view.Home",
		typ:sap.ui.core.mvc.ViewTyp.Js
		});
		}
	});
});
