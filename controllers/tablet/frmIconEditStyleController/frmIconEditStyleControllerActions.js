define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for headerButtonLeft **/
    AS_Button_i8d5b70c574e41b39fa8d3ea48a25318: function AS_Button_i8d5b70c574e41b39fa8d3ea48a25318(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmSegmentMoreFeatures");
        ntf.navigate();
    },
    /** onEditing defined for segStates **/
    AS_Segment_h7cc92320af84112b7b00f76503ba189: function AS_Segment_h7cc92320af84112b7b00f76503ba189(eventobject, editmode, sectionNumber, rowNumber) {
        var self = this;
        return self.onEditingIconStyle.call(this, eventobject, editmode, sectionNumber, rowNumber);
    },
    /** init defined for frmIconEditStyle **/
    AS_Form_b1584e05a50341419c6bb6543548b34b: function AS_Form_b1584e05a50341419c6bb6543548b34b(eventobject) {
        var self = this;
        return self.dataForSeg.call(this, eventobject);
    }
});