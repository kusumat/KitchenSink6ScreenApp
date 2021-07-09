define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for headerButtonLeft **/
    AS_Button_fef9d3dc04624d22bef53889a041990b: function AS_Button_fef9d3dc04624d22bef53889a041990b(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmAclmeterOptions");
        ntf.navigate();
    },
    /** onHide defined for frmAclMeterReadings **/
    AS_Form_i8025e6a60d84727844a9821ab27bc5a: function AS_Form_i8025e6a60d84727844a9821ab27bc5a(eventobject) {
        var self = this;
        kony.accelerometer.stopMonitoringAcceleration();
    }
});