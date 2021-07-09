define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for headerButtonLeft **/
    AS_Button_c434ad5a73a8477f9a784112c384cbda: function AS_Button_c434ad5a73a8477f9a784112c384cbda(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmSegmentMoreFeatures");
        ntf.navigate();
    },
    /** onEditing defined for segStates **/
    AS_Segment_daafcc11ff9c4c17ae89ee05e26cfc89: function AS_Segment_daafcc11ff9c4c17ae89ee05e26cfc89(eventobject, editmode, sectionNumber, rowNumber) {
        var self = this;
        return self.onEditing.call(this, eventobject, editmode, sectionNumber, rowNumber);
    },
    /** init defined for frmSwipe **/
    AS_Form_fc2a6f6942af48bbaa2c29791dc60cfa: function AS_Form_fc2a6f6942af48bbaa2c29791dc60cfa(eventobject) {
        var self = this;
        return self.dataForSeg.call(this, eventobject);
    }
});