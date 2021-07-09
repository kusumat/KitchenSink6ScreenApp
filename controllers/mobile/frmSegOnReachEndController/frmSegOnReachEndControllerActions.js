define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for headerButtonLeft **/
    AS_Button_b42704ec7d6e42f1b0af6a5bada67444: function AS_Button_b42704ec7d6e42f1b0af6a5bada67444(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmSegmentMoreFeatures");
        ntf.navigate();
    },
    /** onTextChange defined for tbxSearchORE **/
    ACTION_SEQUENCE_AS_f5e3f75fda7243009fc5b845a3bfec96: function ACTION_SEQUENCE_AS_f5e3f75fda7243009fc5b845a3bfec96(eventobject, changedtext) {
        var self = this;
        return self.displaySearch.call(this);
    },
    /** onBeginEditing defined for tbxSearchORE **/
    ACTION_SEQUENCE_AS_fa276c4455c7404c918f659159062ba6: function ACTION_SEQUENCE_AS_fa276c4455c7404c918f659159062ba6(eventobject, changedtext) {
        var self = this;
        return self.beginEdit.call(this);
    },
    /** onReachingEnd defined for segRecords **/
    ACTION_SEQUENCE_AS_j3eb781322584ccf906a97112be888e7: function ACTION_SEQUENCE_AS_j3eb781322584ccf906a97112be888e7(eventobject) {
        var self = this;
        return self.scrollEnd.call(this);
    }
});