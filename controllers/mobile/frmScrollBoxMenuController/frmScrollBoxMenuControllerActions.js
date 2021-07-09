define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for headerButtonLeft **/
    AS_Button_h4e7c91d678c4e978441a6790f2a0ecc: function AS_Button_h4e7c91d678c4e978441a6790f2a0ecc(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmContainerWidgets");
        ntf.navigate();
    },
    /** onTouchEnd defined for Image0e30345150fb048 **/
    AS_Image_e683a43557e548e7ad6f228cb446776a: function AS_Image_e683a43557e548e7ad6f228cb446776a(eventobject, x, y) {
        var self = this;
        var menuVisibility = this.view.flxLeftMenu.isVisible;
        if (menuVisibility == false) {
            this.view.flxLeftMenu.isVisible = true;
        } else this.view.flxLeftMenu.isVisible = false;
    }
});