define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for headerButtonLeft **/
    AS_Button_dc77b691888449ae8f446fc40c45f2bb: function AS_Button_dc77b691888449ae8f446fc40c45f2bb(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmDvcFeatures");
        ntf.navigate();
    },
    /** preShow defined for frmDeviceInfo **/
    AS_Form_f2e3d3a89f184ca79472cc8ac0133ea1: function AS_Form_f2e3d3a89f184ca79472cc8ac0133ea1(eventobject) {
        var self = this;
        return self.deviceInfo.call(this);
    }
});