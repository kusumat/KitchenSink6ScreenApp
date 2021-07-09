define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for headerButtonLeft **/
    AS_Button_a9ae3d6581914578a7d1d6f37175f914: function AS_Button_a9ae3d6581914578a7d1d6f37175f914(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmSegmentMoreFeatures");
        ntf.navigate();
    },
    /** onTextChange defined for tbxSearchORE **/
    AS_TextField_d5a99cbdb27b40cb97c108466fb29e32: function AS_TextField_d5a99cbdb27b40cb97c108466fb29e32(eventobject, changedtext) {
        var self = this;
        return self.displaySearch.call(this);
    },
    /** onBeginEditing defined for tbxSearchORE **/
    AS_TextField_e62264c3854b42ad93663c3cfb931623: function AS_TextField_e62264c3854b42ad93663c3cfb931623(eventobject, changedtext) {
        var self = this;
        return self.beginEdit.call(this);
    },
    /** onReachingEnd defined for segRecords **/
    AS_Segment_cfb56df92202469e9106e52f3fcae5e5: function AS_Segment_cfb56df92202469e9106e52f3fcae5e5(eventobject) {
        var self = this;
        return self.scrollEnd.call(this);
    }
});