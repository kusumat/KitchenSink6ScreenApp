define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for headerButtonLeft **/
    AS_Button_cb02a71b3a3b42f297e6a4d3c177e4e8: function AS_Button_cb02a71b3a3b42f297e6a4d3c177e4e8(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmUICategory");
        ntf.navigate();
    },
    /** preShow defined for frmFlex **/
    AS_Form_c9086eb93aa646e49c62264b02c97308: function AS_Form_c9086eb93aa646e49c62264b02c97308(eventobject) {
        var self = this;
        this.resetWidgetPositions();
    },
    /** postShow defined for frmFlex **/
    AS_Form_b163fe2d8a684694ad4130a98e1b8370: function AS_Form_b163fe2d8a684694ad4130a98e1b8370(eventobject) {
        var self = this;
        this.animateFlex();
    }
});