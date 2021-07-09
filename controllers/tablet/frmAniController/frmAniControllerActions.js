define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for headerButtonLeft **/
    AS_Button_g0db7d74344744178dc59c73bdc2d254: function AS_Button_g0db7d74344744178dc59c73bdc2d254(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmHome");
        ntf.navigate();
    },
    /** onRowClick defined for segTransitions **/
    AS_Segment_d0e1b30505274b788c53a397d26081b4: function AS_Segment_d0e1b30505274b788c53a397d26081b4(eventobject, sectionNumber, rowNumber) {
        var self = this;
        return self.onClickOfFrmAniSeg.call(this, eventobject);
    }
});