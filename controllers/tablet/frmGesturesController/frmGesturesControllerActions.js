define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for headerButtonLeft **/
    AS_Button_b5f042a167ee46e08be4d9a9bd86bb8c: function AS_Button_b5f042a167ee46e08be4d9a9bd86bb8c(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmFormOptions");
        ntf.navigate();
    },
    /** preShow defined for frmGestures **/
    AS_Form_c48a0fe379674324a7d0e0683c407c02: function AS_Form_c48a0fe379674324a7d0e0683c407c02(eventobject) {
        var self = this;
        this.view.imgGes.isVisible = false;
    },
    /** postShow defined for frmGestures **/
    AS_Form_i083875da1914b7a8e686f3bd8cf9cbd: function AS_Form_i083875da1914b7a8e686f3bd8cf9cbd(eventobject) {
        var self = this;
        this.GenericGestureHandler();
    }
});