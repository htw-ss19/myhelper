<<<<<<< HEAD
sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
=======
sap.ui.define(["sap/ui/core/mvc/Controller",
   "sap/ui/model/resource/ResourceModel"
],
 function (Controller) {
>>>>>>> stash
	"use strict";
<<<<<<< HEAD
	return Controller.extend("myhelper.myhelper.controller.Login", {
		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf myhelper.myhelper.view.Login
		 */
		onInit: function () {
			// var oEmail = this.getView().byId("emailInput").getValue();
			// var oPassword = this.getView().byId("passwordInput").getValue();
			// create JSON model instance
			// var oModel = new sap.ui.model.json.JSONModel();
			// set the data for the model
			// oModel.dataLoaded("json/customer.json");
			// set the model to the core
			// sap.ui.getCore().setModel(oModel);
=======
	return Controller.extend("myhelper.webapp.controller.Login", {
		checkUser: function (oEvent) {
			var user = this.byId("emailLogin").getValue();
			this.byId("password").getValue();
			sap.m.MessageToast.show("Benutzername/E-Mail " + user + " " + this._validateUser(user));
>>>>>>> stash
		},
<<<<<<< HEAD
		/**
		 *@memberOf myhelper.myhelper.controller.Login
		 */
		action: function (oEvent) {
			var that = this;
			var actionParameters = JSON.parse(oEvent.getSource().data("wiring").replace(/'/g, "\""));
			var eventType = oEvent.getId();
			var aTargets = actionParameters[eventType].targets || [];
			aTargets.forEach(function (oTarget) {
				var oControl = that.byId(oTarget.id);
				if (oControl) {
					var oParams = {};
					for (var prop in oTarget.parameters) {
						oParams[prop] = oEvent.getParameter(oTarget.parameters[prop]);
					}
					oControl[oTarget.action](oParams);
				}
			});
			var oNavigation = actionParameters[eventType].navigation;
			if (oNavigation) {
				var oParams = {};
				(oNavigation.keys || []).forEach(function (prop) {
					oParams[prop.name] = encodeURIComponent(JSON.stringify({
						value: oEvent.getSource().getBindingContext(oNavigation.model).getProperty(prop.name),
						type: prop.type
					}));
				});
				if (Object.getOwnPropertyNames(oParams).length !== 0) {
					this.getOwnerComponent().getRouter().navTo(oNavigation.routeName, oParams);
				} else {
					this.getOwnerComponent().getRouter().navTo(oNavigation.routeName);
				}
			}
=======
		_validateUser: function (sUserName) {
			var aUsers = ["Max", "Jana", "Thomas"]; // should retrieved from somewhere, e.g., JSON file or Model
			return aUsers.indexOf(sUserName) > -1;
		},
		_openHome: function() {
		sap.ui.view({id:"",viewName:"myhelper.webapp.view.Home",
		typ:sap.ui.core.mvc.ViewTyp.Js
		});
>>>>>>> stash
		}
	});
});