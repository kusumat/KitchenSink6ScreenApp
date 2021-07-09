define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for headerButtonLeft **/
    AS_Button_d78b923f4f3c4ec69975b85cdeb57a81: function AS_Button_d78b923f4f3c4ec69975b85cdeb57a81(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmDvcFeatures");
        ntf.navigate();
    },
    /** onClick defined for btnWOAttchmnt **/
    AS_Button_h4e795775bfe456c857c83fb7038ecee: function AS_Button_h4e795775bfe456c857c83fb7038ecee(eventobject) {
        var self = this;
        return self.emailSend.call(this);
    },
    /** onClick defined for btnWAttchmnt **/
    AS_Button_h2e517dfe2424a8cbb0306494112e4c5: function AS_Button_h2e517dfe2424a8cbb0306494112e4c5(eventobject) {
        var self = this;
        return self.emailSendWithAttachment.call(this);
    }
});