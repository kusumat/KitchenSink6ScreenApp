define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for headerButtonLeft **/
    AS_Button_edcb353927d641409a93885584beec97: function AS_Button_edcb353927d641409a93885584beec97(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmCameraOptions");
        ntf.navigate();
    },
    /** onCapture defined for camPotrait **/
    AS_Camera_c6a306c74c7b4d89bee970431f04bd76: function AS_Camera_c6a306c74c7b4d89bee970431f04bd76(eventobject) {
        var self = this;
        return self.onCapturePortrait.call(this, eventobject);
    },
    /** onCapture defined for camLandscape **/
    AS_Camera_j4eca6fb3f6c489eb7f6878f1828006a: function AS_Camera_j4eca6fb3f6c489eb7f6878f1828006a(eventobject) {
        var self = this;
        return self.onCaptureLandScape.call(this, eventobject);
    }
});