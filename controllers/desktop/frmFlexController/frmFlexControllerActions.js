define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for headerButtonLeft **/
    AS_Button_ab6697c2455546ab9d5bbb75c6353780: function AS_Button_ab6697c2455546ab9d5bbb75c6353780(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmUICategory");
        ntf.navigate();
    },
    /** preShow defined for frmFlex **/
    AS_Form_a23016150e894d93a8bd5046b2bd3fe5: function AS_Form_a23016150e894d93a8bd5046b2bd3fe5(eventobject) {
        var self = this;
        this.resetWidgetPositions();
    },
    /** postShow defined for frmFlex **/
    AS_Form_f10aff6190fd41f7959a219fa34585c7: function AS_Form_f10aff6190fd41f7959a219fa34585c7(eventobject) {
        var self = this;
        this.animateFlex();
    }
});