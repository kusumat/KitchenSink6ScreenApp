define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for headerButtonLeft **/
    AS_Button_f2531e6585b141adad99cc048a9999d5: function AS_Button_f2531e6585b141adad99cc048a9999d5(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmDvcFeatures");
        ntf.navigate();
    },
    /** onClick defined for btnWOAttchmnt **/
    AS_Button_c6ee760bfbed4f0685c411d5533f4acc: function AS_Button_c6ee760bfbed4f0685c411d5533f4acc(eventobject) {
        var self = this;
        return self.emailSend.call(this);
    },
    /** onClick defined for btnWAttchmnt **/
    AS_Button_h39238ef3ab546129c09b6423b55551b: function AS_Button_h39238ef3ab546129c09b6423b55551b(eventobject) {
        var self = this;
        return self.emailSendWithAttachment.call(this);
    }
});