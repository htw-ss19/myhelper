sap.ui.controller(
  "view.Kalender"
  {oFormatYyyymmdd: null,
    onInit: function() {
       this.oFormatYyyymmdd = sap.ui.core.format.DateFormat.getInstance({
         pattern: "yyyy-MM-dd",
         calendarType: sap.ui.core.CalendarType.Gregorian
       });
     },
     onBeforeRendering: function() {

       },


       onAfterRendering: function() {

       },


       onExit: function() {

       },

       addDays: function(oDate, nDays){
         var oResultDate = new Date(oDate);  //get copy of input date
         oResultDate.setDate(oResultDate.getDate() + nDays);
         return oResultDate;
       },

       onShowSpecialDays: function(oEvent){
         var oCalendar = this.getView().byId("calendar");

         oCalendar.addSpecialDate(new sap.ui.unified.DateTypeRange({
           startDate: this.addDays(new Date(), 2),
           type: sap.ui.unified.CalendarDayType.Type03
         }));

         oCalendar.addSpecialDate(new sap.ui.unified.DateTypeRange({
           startDate: this.addDays(new Date(), -2),
           type: sap.ui.unified.CalendarDayType.Type03
         }));

         oCalendar.addSpecialDate(new sap.ui.unified.DateTypeRange({
           startDate: this.addDays(new Date(), 5),
           type: sap.ui.unified.CalendarDayType.Type03
         }));
       },

       /**
        * Event hanlder for calendar Select
        */
       onCalDateSelect: function(oEvent){
         var oCalendar = oEvent.getSource();
         var oSpecialDate = this._getSpecialDate(oCalendar.getSelectedDates()[0]);   //returns special date if the selected date is special date
         oCalendar.removeSpecialDate(oSpecialDate);
       },

       /**
        * Check if the given date is special date or not
        * and then return the special date
        * @param [sap.ui.unified.DateRange] oInpDateRange - Selected date, should be of type selected date
        */
       _getSpecialDate: function(oInpDateRange){
         var oCalendar = this.getView().byId("calendar");

         //Step 1: get all special dates in calendar
         var aSpecialDates = oCalendar.getSpecialDates();

         //Step 2: Check if this input date is part of any special date.
         // if found then return that special date
         var oReturnSpecialDate;

         for(var i in aSpecialDates){
           //We cannot do direct comparision on dates...as Special dates contain time stamps
           //but selected date has no time stamp. (If you are create special date without time stamps....then compare the date object directly)
           // So compare only the date, month and year fields
           var oInpStartDate = oInpDateRange.getStartDate();
           var oSpecialStartDate = aSpecialDates[i].getStartDate();
           if(oInpStartDate.getDate() === oSpecialStartDate.getDate()
             && oInpStartDate.getMonth() === oSpecialStartDate.getMonth()
             && oInpStartDate.getFullYear() === oSpecialStartDate.getFullYear()){

               oReturnSpecialDate = aSpecialDates[i];
               break;
             }
         }

         return oReturnSpecialDate;
       }

     });
