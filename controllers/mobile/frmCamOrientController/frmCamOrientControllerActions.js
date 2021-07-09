define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for headerButtonLeft **/
    AS_Button_c60fe0f6e5954d0581fecbb2e3339b62: function AS_Button_c60fe0f6e5954d0581fecbb2e3339b62(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmCameraOptions");
        ntf.navigate();
    },
    /** onCapture defined for camPotrait **/
    AS_Camera_e476e45d1d9941fba2d4a922061fe278: function AS_Camera_e476e45d1d9941fba2d4a922061fe278(eventobject) {
        var self = this;
        return self.onCapturePortrait.call(this, eventobject);
    },
    /** onCapture defined for camLandscape **/
    AS_Camera_g3625659402c43de8166f33561f7ac5c: function AS_Camera_g3625659402c43de8166f33561f7ac5c(eventobject) {
        var self = this;
        return self.onCaptureLandScape.call(this, eventobject);
    }
});