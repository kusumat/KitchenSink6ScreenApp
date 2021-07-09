define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for headerButtonLeft **/
    AS_Button_e6e94756d0c5489b8268d506aecb898b: function AS_Button_e6e94756d0c5489b8268d506aecb898b(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmUICategory");
        ntf.navigate();
    },
    /** preShow defined for frmFlex **/
    AS_Form_a6ca011f9fa94764a273169a1e7c485d: function AS_Form_a6ca011f9fa94764a273169a1e7c485d(eventobject) {
        var self = this;
        this.resetWidgetPositions();
    },
    /** postShow defined for frmFlex **/
    AS_Form_a6b2b012a00c420d886c264d9fb671c9: function AS_Form_a6b2b012a00c420d886c264d9fb671c9(eventobject) {
        var self = this;
        this.animateFlex();
    }
});