define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for headerButtonLeft **/
    AS_Button_dc449298cf98436fa0d3634537efc2cf: function AS_Button_dc449298cf98436fa0d3634537efc2cf(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmCameraOptions");
        ntf.navigate();
    },
    /** onCapture defined for camPublic **/
    AS_Camera_b2984e1e7ede4cbe8f63d7e0d8a32ae9: function AS_Camera_b2984e1e7ede4cbe8f63d7e0d8a32ae9(eventobject) {
        var self = this;
        return self.onCapturePublic.call(this, eventobject);
    },
    /** onCapture defined for camPrivate **/
    AS_Camera_a63b71638fc049fe8947031d890eccd7: function AS_Camera_a63b71638fc049fe8947031d890eccd7(eventobject) {
        var self = this;
        return self.onCapturePrivate.call(this, eventobject);
    },
    /** onCapture defined for camInMem **/
    AS_Camera_i9bd11d06f5f42f29f30dd5296e3964d: function AS_Camera_i9bd11d06f5f42f29f30dd5296e3964d(eventobject) {
        var self = this;
        return self.onCaptureinMemory.call(this, eventobject);
    }
});