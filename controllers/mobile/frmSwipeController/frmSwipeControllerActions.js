define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for headerButtonLeft **/
    AS_Button_a903fde0fe864edd988157b87d1a16e7: function AS_Button_a903fde0fe864edd988157b87d1a16e7(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmSegmentMoreFeatures");
        ntf.navigate();
    },
    /** onEditing defined for segStates **/
    ACTION_SEQUENCE_AS_cc25823f59944254a58a055a50752528: function ACTION_SEQUENCE_AS_cc25823f59944254a58a055a50752528(eventobject, editmode, sectionNumber, rowNumber) {
        var self = this;
        return self.onEditing.call(this, eventobject, editmode, sectionNumber, rowNumber);
    },
    /** init defined for frmSwipe **/
    AS_Form_f33778c1c4fa46a187b5c2554abc918c: function AS_Form_f33778c1c4fa46a187b5c2554abc918c(eventobject) {
        var self = this;
        return self.dataForSeg.call(this, eventobject);
    }
});