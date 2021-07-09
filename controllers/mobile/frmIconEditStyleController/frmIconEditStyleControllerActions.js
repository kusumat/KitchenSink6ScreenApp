define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for headerButtonLeft **/
    AS_Button_f531e29d56d8421591c32766d823a443: function AS_Button_f531e29d56d8421591c32766d823a443(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmSegmentMoreFeatures");
        ntf.navigate();
    },
    /** onEditing defined for segStates **/
    ACTION_SEQUENCE_AS_d31cc30fa7ce4bd5b965a33d647397c4: function ACTION_SEQUENCE_AS_d31cc30fa7ce4bd5b965a33d647397c4(eventobject, editmode, sectionNumber, rowNumber) {
        var self = this;
        return self.onEditingIconStyle.call(this, eventobject, editmode, sectionNumber, rowNumber);
    },
    /** init defined for frmIconEditStyle **/
    AS_Form_g341b9bf57e9485192f8c189ede91653: function AS_Form_g341b9bf57e9485192f8c189ede91653(eventobject) {
        var self = this;
        return self.dataForSeg.call(this, eventobject);
    }
});