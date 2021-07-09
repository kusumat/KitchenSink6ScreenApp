define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for headerButtonLeft **/
    AS_Button_bde1da62e18242c9b3d8e739d2a8ceca: function AS_Button_bde1da62e18242c9b3d8e739d2a8ceca(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmSegmentOptions");
        ntf.navigate();
    },
    /** onClick defined for Button0f48cf5418aba4b **/
    AS_Button_c550784110084ef7a28c7709e0bc156a: function AS_Button_c550784110084ef7a28c7709e0bc156a(eventobject) {
        var self = this;
        var params = this.view.segSecHdrWidoutTmplate.selectedRowItems;
        var navObj = new kony.mvc.Navigation("frmSegMulSelectData");
        navObj.navigate(params);
    }
});