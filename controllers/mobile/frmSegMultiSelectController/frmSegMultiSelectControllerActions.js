define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for headerButtonLeft **/
    AS_Button_g7ef2605514542d69519bc8b5aee12ae: function AS_Button_g7ef2605514542d69519bc8b5aee12ae(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmSegmentOptions");
        ntf.navigate();
    },
    /** onClick defined for Button0f48cf5418aba4b **/
    ACTION_SEQUENCE_AS_e6de17cd550f4fa79d8d28f2da44a0bd: function ACTION_SEQUENCE_AS_e6de17cd550f4fa79d8d28f2da44a0bd(eventobject) {
        var self = this;
        var params = this.view.segSecHdrWidoutTmplate.selectedRowItems;
        var navObj = new kony.mvc.Navigation("frmSegMulSelectData");
        navObj.navigate(params);
    }
});