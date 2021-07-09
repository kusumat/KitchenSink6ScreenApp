define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for headerButtonLeft **/
    AS_Button_e3b6974e17e74302b037e3172a380f5d: function AS_Button_e3b6974e17e74302b037e3172a380f5d(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmFormOptions");
        ntf.navigate();
    },
    /** preShow defined for frmGestures **/
    AS_Form_gadfdebd38034f5491aa585f0152b7a4: function AS_Form_gadfdebd38034f5491aa585f0152b7a4(eventobject) {
        var self = this;
        this.view.imgGes.isVisible = false;
    },
    /** postShow defined for frmGestures **/
    AS_Form_be3a3c003cce4bcc873b0e839d18ec79: function AS_Form_be3a3c003cce4bcc873b0e839d18ec79(eventobject) {
        var self = this;
        this.GenericGestureHandler();
    }
});