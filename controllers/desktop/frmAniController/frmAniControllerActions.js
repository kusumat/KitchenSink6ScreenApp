define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for headerButtonLeft **/
    AS_Button_e0d91342678843fcb65e57b7d778abc0: function AS_Button_e0d91342678843fcb65e57b7d778abc0(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmHome");
        ntf.navigate();
    },
    /** onRowClick defined for segTransitions **/
    AS_Segment_ac0c340aa0e649309fee5d1efde5a02f: function AS_Segment_ac0c340aa0e649309fee5d1efde5a02f(eventobject, sectionNumber, rowNumber) {
        var self = this;
        return self.onClickOfFrmAniSeg.call(this, eventobject);
    }
});