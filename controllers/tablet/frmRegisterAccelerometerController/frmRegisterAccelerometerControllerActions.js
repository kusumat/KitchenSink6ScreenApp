define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for headerButtonLeft **/
    AS_Button_e80e4c1c54bb4df99f4dc5c54f8f5ac1: function AS_Button_e80e4c1c54bb4df99f4dc5c54f8f5ac1(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmAclmeterOptions");
        ntf.navigate();
    },
    /** preShow defined for frmRegisterAccelerometer **/
    AS_Form_d008ca1c1e8e422db325445f4628e407: function AS_Form_d008ca1c1e8e422db325445f4628e407(eventobject) {
        var self = this;
        return self.regAccEvent.call(this);
    },
    /** onHide defined for frmRegisterAccelerometer **/
    AS_Form_he9a8c9b733440a7bf34d7eb23bea9c1: function AS_Form_he9a8c9b733440a7bf34d7eb23bea9c1(eventobject) {
        var self = this;
        return self.resetShake.call(this);
    }
});