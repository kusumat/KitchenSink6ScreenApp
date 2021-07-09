define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for headerButtonLeft **/
    AS_Button_f898dabe7ce947b69b5e9a10e9384dd4: function AS_Button_f898dabe7ce947b69b5e9a10e9384dd4(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmDvcFeatures");
        ntf.navigate();
    },
    /** preShow defined for frmDeviceInfo **/
    AS_Form_d6f1fff4d335416598c6dcac1c715395: function AS_Form_d6f1fff4d335416598c6dcac1c715395(eventobject) {
        var self = this;
        return self.deviceInfo.call(this);
    }
});