define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for headerButtonLeft **/
    AS_Button_fec98902ebf34d79863331fcd965653f: function AS_Button_fec98902ebf34d79863331fcd965653f(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmCameraOptions");
        ntf.navigate();
    },
    /** onCapture defined for camPotrait **/
    AS_Camera_ffb061e07bc04363828eb183b942b479: function AS_Camera_ffb061e07bc04363828eb183b942b479(eventobject) {
        var self = this;
        return self.onCapturePortrait.call(this, eventobject);
    },
    /** onCapture defined for camLandscape **/
    AS_Camera_bf450028188b4024bd4f4f9d381b5bd1: function AS_Camera_bf450028188b4024bd4f4f9d381b5bd1(eventobject) {
        var self = this;
        return self.onCaptureLandScape.call(this, eventobject);
    }
});