define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for headerButtonLeft **/
    AS_Button_a347882f86be4153837f0a9a42667474: function AS_Button_a347882f86be4153837f0a9a42667474(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmFormOptions");
        ntf.navigate();
    },
    /** preShow defined for frmGestures **/
    AS_Form_i2ce4b4a3a3b4df1ac05779205482d32: function AS_Form_i2ce4b4a3a3b4df1ac05779205482d32(eventobject) {
        var self = this;
        this.view.imgGes.isVisible = false;
    },
    /** postShow defined for frmGestures **/
    AS_Form_ee3374f3a14b42bd81f30160450e8574: function AS_Form_ee3374f3a14b42bd81f30160450e8574(eventobject) {
        var self = this;
        this.GenericGestureHandler();
    }
});