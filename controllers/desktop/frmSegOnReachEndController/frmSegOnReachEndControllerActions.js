define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for headerButtonLeft **/
    AS_Button_baeeab5284bb41da9b9bcbd9fe7d0eda: function AS_Button_baeeab5284bb41da9b9bcbd9fe7d0eda(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmSegmentMoreFeatures");
        ntf.navigate();
    },
    /** onTextChange defined for tbxSearchORE **/
    AS_TextField_a083868f23c04b6bb121a74547d6c500: function AS_TextField_a083868f23c04b6bb121a74547d6c500(eventobject, changedtext) {
        var self = this;
        return self.displaySearch.call(this);
    },
    /** onReachingEnd defined for segRecords **/
    AS_Segment_cc428f39eb974ec8aa606af1907a1a0e: function AS_Segment_cc428f39eb974ec8aa606af1907a1a0e(eventobject) {
        var self = this;
        return self.scrollEnd.call(this);
    }
});