define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for headerButtonLeft **/
    AS_Button_b2c270a693d74071ab47cefc7d0dbf92: function AS_Button_b2c270a693d74071ab47cefc7d0dbf92(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmSegmentMoreFeatures");
        ntf.navigate();
    },
    /** onPull defined for segStates **/
    AS_Segment_ad4e51690717407fa5c221983fceb7d3: function AS_Segment_ad4e51690717407fa5c221983fceb7d3(eventobject) {
        var self = this;
        return self.refresh.call(this, eventobject);
    },
    /** init defined for frmPushPull **/
    AS_Form_je2846225b8d4193bcd35df82e329538: function AS_Form_je2846225b8d4193bcd35df82e329538(eventobject) {
        var self = this;
        return self.dataForSeg.call(this, eventobject);
    }
});