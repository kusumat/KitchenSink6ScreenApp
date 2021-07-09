define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for headerButtonLeft **/
    AS_Button_c74ef269b6a84dbda1a1df03e391f45b: function AS_Button_c74ef269b6a84dbda1a1df03e391f45b(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmSegmentMoreFeatures");
        ntf.navigate();
    },
    /** onPull defined for segStates **/
    AS_Segment_e7bc133948ca438b87b69c1c9f2821c5: function AS_Segment_e7bc133948ca438b87b69c1c9f2821c5(eventobject) {
        var self = this;
        return self.refresh.call(this, eventobject);
    },
    /** onEditing defined for segStates **/
    AS_Segment_gb3e2518fb22419f9af465253ce87a63: function AS_Segment_gb3e2518fb22419f9af465253ce87a63(eventobject, editmode, sectionNumber, rowNumber) {
        var self = this;
        return self.onEditing.call(this);
    },
    /** init defined for frmPushPull **/
    AS_Form_b66e8369627f45b6aa0eb62497e59dea: function AS_Form_b66e8369627f45b6aa0eb62497e59dea(eventobject) {
        var self = this;
        return self.dataForSeg.call(this, eventobject);
    }
});