define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for headerButtonLeft **/
    AS_Button_hf02dc8e50844532bf4de39596c982a0: function AS_Button_hf02dc8e50844532bf4de39596c982a0(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmDvcFeatures");
        ntf.navigate();
    },
    /** onClick defined for btnWOAttchmnt **/
    ACTION_SEQUENCE_AS_h4475dc52a644eb0b0439c5008cdb196: function ACTION_SEQUENCE_AS_h4475dc52a644eb0b0439c5008cdb196(eventobject) {
        var self = this;
        return self.emailSend.call(this);
    },
    /** onClick defined for btnWAttchmnt **/
    ACTION_SEQUENCE_AS_f72667b62e3342579c8114477d57a8e3: function ACTION_SEQUENCE_AS_f72667b62e3342579c8114477d57a8e3(eventobject) {
        var self = this;
        return self.emailSendWithAttachment.call(this);
    }
});