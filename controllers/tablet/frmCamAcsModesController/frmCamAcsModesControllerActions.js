define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for headerButtonLeft **/
    AS_Button_d4bf50682f844787b4d3fd8a19a740cb: function AS_Button_d4bf50682f844787b4d3fd8a19a740cb(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmCameraOptions");
        ntf.navigate();
    },
    /** onCapture defined for camPublic **/
    AS_Camera_j426443ea4dc4902b3900465e01b9b1a: function AS_Camera_j426443ea4dc4902b3900465e01b9b1a(eventobject) {
        var self = this;
        return self.onCapturePublic.call(this, eventobject);
    },
    /** onCapture defined for camPrivate **/
    AS_Camera_a6dbc5a5d7ff4908b4ea1242f057f36a: function AS_Camera_a6dbc5a5d7ff4908b4ea1242f057f36a(eventobject) {
        var self = this;
        return self.onCapturePrivate.call(this, eventobject);
    },
    /** onCapture defined for camInMem **/
    AS_Camera_c73c8413709f4dab8ea0213de4a23ffa: function AS_Camera_c73c8413709f4dab8ea0213de4a23ffa(eventobject) {
        var self = this;
        return self.onCaptureinMemory.call(this, eventobject);
    }
});