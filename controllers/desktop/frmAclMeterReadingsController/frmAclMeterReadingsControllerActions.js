define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for headerButtonLeft **/
    AS_Button_j7116d358d9a4c9f97ad5a3fb9d1c9bd: function AS_Button_j7116d358d9a4c9f97ad5a3fb9d1c9bd(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmAclmeterOptions");
        ntf.navigate();
    },
    /** onHide defined for frmAclMeterReadings **/
    AS_Form_eefaea83d858499b809f97d2ab83704f: function AS_Form_eefaea83d858499b809f97d2ab83704f(eventobject) {
        var self = this;
        kony.accelerometer.stopMonitoringAcceleration();
    }
});