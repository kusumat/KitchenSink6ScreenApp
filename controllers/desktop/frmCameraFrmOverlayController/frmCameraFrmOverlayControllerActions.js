define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for headerButtonLeft **/
    AS_Button_d448219208e8452b9037cf88625f83a1: function AS_Button_d448219208e8452b9037cf88625f83a1(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmCameraOptions");
        ntf.navigate();
    },
    /** onCapture defined for camBasic **/
    AS_Camera_d261b077d1064143912be69b316ce1d2: function AS_Camera_d261b077d1064143912be69b316ce1d2(eventobject) {
        var self = this;
        return self.onCaptureFrmOverLay.call(this, eventobject);
    }
});