define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for headerButtonLeft **/
    AS_Button_f3a42b3487744c9ea3b233549caafebd: function AS_Button_f3a42b3487744c9ea3b233549caafebd(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmCameraOptions");
        ntf.navigate();
    },
    /** onCapture defined for camBasic **/
    AS_Camera_ce19e4f0c6ff47ea9a07aba231eb1779: function AS_Camera_ce19e4f0c6ff47ea9a07aba231eb1779(eventobject) {
        var self = this;
        return self.onCaptureFrmOverLay.call(this, eventobject);
    }
});