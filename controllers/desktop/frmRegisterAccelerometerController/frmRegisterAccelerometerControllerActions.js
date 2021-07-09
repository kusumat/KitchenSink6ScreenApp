define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for headerButtonLeft **/
    AS_Button_e7429079f7c44fbca5dfeef52b546d75: function AS_Button_e7429079f7c44fbca5dfeef52b546d75(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmAclmeterOptions");
        ntf.navigate();
    },
    /** preShow defined for frmRegisterAccelerometer **/
    AS_Form_efce1036c41d4113b0eb2f8f4e1f4442: function AS_Form_efce1036c41d4113b0eb2f8f4e1f4442(eventobject) {
        var self = this;
        return self.regAccEvent.call(this);
    },
    /** onHide defined for frmRegisterAccelerometer **/
    AS_Form_g28a9d646f5542fb80aa9aed6d69cca6: function AS_Form_g28a9d646f5542fb80aa9aed6d69cca6(eventobject) {
        var self = this;
        return self.resetShake.call(this);
    }
});