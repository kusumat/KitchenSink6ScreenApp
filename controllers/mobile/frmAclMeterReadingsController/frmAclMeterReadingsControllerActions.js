define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for headerButtonLeft **/
    AS_Button_d6457112600e4a569157e82dfc8272c3: function AS_Button_d6457112600e4a569157e82dfc8272c3(eventobject) {
        var self = this;
        var ntf = new voltmx.mvc.Navigation("frmAclmeterOptions");
        ntf.navigate();
    },
    /** onHide defined for frmAclMeterReadings **/
    AS_Form_hcf598de1d914b9ab1fc2777c687e232: function AS_Form_hcf598de1d914b9ab1fc2777c687e232(eventobject) {
        var self = this;
        kony.accelerometer.stopMonitoringAcceleration();
    },
    /** onMapping defined for frmAclMeterReadings **/
    AS_Form_j942ce24c2b544fd9742cd94fe8092a8: function AS_Form_j942ce24c2b544fd9742cd94fe8092a8(eventobject) {
        var self = this;
    }
});