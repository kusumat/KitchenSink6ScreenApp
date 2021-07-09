define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for headerButtonLeft **/
    AS_Button_b10bf211c6e8430aae3534b69ccc38c6: function AS_Button_b10bf211c6e8430aae3534b69ccc38c6(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmContainerWidgets");
        ntf.navigate();
    },
    /** onTouchEnd defined for Image0e30345150fb048 **/
    AS_Image_b359c67ba1ca4449a8ebb46249fab266: function AS_Image_b359c67ba1ca4449a8ebb46249fab266(eventobject, x, y) {
        var self = this;
        var menuVisibility = this.view.flxLeftMenu.isVisible;
        if (menuVisibility == false) {
            this.view.flxLeftMenu.isVisible = true;
        } else this.view.flxLeftMenu.isVisible = false;
    }
});