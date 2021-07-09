define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for headerButtonLeft **/
    AS_Button_be7c312f7c8045c5899ac7c8bff845a2: function AS_Button_be7c312f7c8045c5899ac7c8bff845a2(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmHome");
        ntf.navigate();
    },
    /** onRowClick defined for segTransitions **/
    AS_Segment_e87fbcd8c0284b67a6707bb9057075f5: function AS_Segment_e87fbcd8c0284b67a6707bb9057075f5(eventobject, sectionNumber, rowNumber) {
        var self = this;
        return self.onClickOfFrmAniSeg.call(this, eventobject);
    }
});