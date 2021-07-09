define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for headerButtonLeft **/
    ACTION_SEQUENCE_AS_ja70f4a1a71749ac958dde84382c52b1: function ACTION_SEQUENCE_AS_ja70f4a1a71749ac958dde84382c52b1(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmHome");
        ntf.navigate();
    },
    /** postShow defined for frmAsyncDataDisplay **/
    AS_Form_ac1d910a123f4277847931b9ee1033f3: function AS_Form_ac1d910a123f4277847931b9ee1033f3(eventobject) {
        var self = this;
        return self.httpRequestCall.call(this);
    }
});