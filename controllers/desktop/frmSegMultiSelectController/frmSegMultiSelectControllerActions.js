define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for headerButtonLeft **/
    AS_Button_b31029ccaca044bcb3e8a2d65884fc9e: function AS_Button_b31029ccaca044bcb3e8a2d65884fc9e(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmSegmentOptions");
        ntf.navigate();
    },
    /** onClick defined for Button0f48cf5418aba4b **/
    AS_Button_c57e446ccade47b1b5ea583f1cdb7a18: function AS_Button_c57e446ccade47b1b5ea583f1cdb7a18(eventobject) {
        var self = this;
        var params = this.view.segSecHdrWidoutTmplate.selectedRowItems;
        var navObj = new kony.mvc.Navigation("frmSegMulSelectData");
        navObj.navigate(params);
    }
});