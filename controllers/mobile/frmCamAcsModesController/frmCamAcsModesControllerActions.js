define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for headerButtonLeft **/
    AS_Button_f038fd0f25544072b275fac21b638e05: function AS_Button_f038fd0f25544072b275fac21b638e05(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmCameraOptions");
        ntf.navigate();
    },
    /** onCapture defined for camPublic **/
    AS_Camera_ae92f264854845ec9cd0b56af18326e9: function AS_Camera_ae92f264854845ec9cd0b56af18326e9(eventobject) {
        var self = this;
        return self.onCapturePublic.call(this, eventobject);
    },
    /** onCapture defined for camPrivate **/
    AS_Camera_a2010a8f3c4a4537ad766a7632e597b0: function AS_Camera_a2010a8f3c4a4537ad766a7632e597b0(eventobject) {
        var self = this;
        return self.onCapturePrivate.call(this, eventobject);
    },
    /** onCapture defined for camInMem **/
    AS_Camera_a64ea4a2a50b47a7b07138ef63b70736: function AS_Camera_a64ea4a2a50b47a7b07138ef63b70736(eventobject) {
        var self = this;
        return self.onCaptureinMemory.call(this, eventobject);
    }
});