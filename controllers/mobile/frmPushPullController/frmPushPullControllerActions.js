define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for headerButtonLeft **/
    AS_Button_a3119ef602464dbca243aaeb423a36cd: function AS_Button_a3119ef602464dbca243aaeb423a36cd(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmSegmentMoreFeatures");
        ntf.navigate();
    },
    /** onPull defined for segStates **/
    ACTION_SEQUENCE_AS_eb9fc238875f4d4a91e7b70191f87eca: function ACTION_SEQUENCE_AS_eb9fc238875f4d4a91e7b70191f87eca(eventobject) {
        var self = this;
        return self.refresh.call(this, eventobject);
    },
    /** onEditing defined for segStates **/
    ACTION_SEQUENCE_AS_i2d21e9ed3f242f7a1d04100a5c44381: function ACTION_SEQUENCE_AS_i2d21e9ed3f242f7a1d04100a5c44381(eventobject, editmode, sectionNumber, rowNumber) {
        var self = this;
        return self.onEditing.call(this);
    },
    /** init defined for frmPushPull **/
    AS_Form_d5ccdd6addb844ae8dfe216d09c49ee3: function AS_Form_d5ccdd6addb844ae8dfe216d09c49ee3(eventobject) {
        var self = this;
        return self.dataForSeg.call(this, eventobject);
    }
});