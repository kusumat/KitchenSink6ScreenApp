define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for headerButtonLeft **/
    AS_Button_a812502f7e174739a9be7ac3907a1b02: function AS_Button_a812502f7e174739a9be7ac3907a1b02(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmContainerWidgets");
        ntf.navigate();
    },
    /** onTouchEnd defined for Image0e30345150fb048 **/
    AS_Image_d739b4e908de455ab1649b0a33a5ac0f: function AS_Image_d739b4e908de455ab1649b0a33a5ac0f(eventobject, x, y) {
        var self = this;
        var menuVisibility = this.view.flxLeftMenu.isVisible;
        if (menuVisibility == false) {
            this.view.flxLeftMenu.isVisible = true;
        } else this.view.flxLeftMenu.isVisible = false;
    }
});