define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for headerButtonLeft **/
    AS_Button_e27a7e378d894e8589802894bffe8052: function AS_Button_e27a7e378d894e8589802894bffe8052(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmCameraOptions");
        ntf.navigate();
    },
    /** onCapture defined for camBasic **/
    AS_Camera_d31cc43efb8a44119a915d7dc8bc7fa1: function AS_Camera_d31cc43efb8a44119a915d7dc8bc7fa1(eventobject) {
        var self = this;
        return self.onCaptureFrmOverLay.call(this, eventobject);
    }
});