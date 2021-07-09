define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for headerButtonLeft **/
    AS_Button_d0d4c8205f264537b4181ea0f0a13983: function AS_Button_d0d4c8205f264537b4181ea0f0a13983(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmDvcFeatures");
        ntf.navigate();
    },
    /** onClick defined for btnSetItem **/
    AS_Button_c86a4cf1a7e94d0d93edc6ccdc5616f5: function AS_Button_c86a4cf1a7e94d0d93edc6ccdc5616f5(eventobject) {
        var self = this;
        return self.setItemvalues.call(this);
    },
    /** onClick defined for CopybtnSetItem0h6f9c6db89d144 **/
    AS_Button_be8bd79b90a3417ea6f1648cd2700af8: function AS_Button_be8bd79b90a3417ea6f1648cd2700af8(eventobject) {
        var self = this;
        return self.getItemvalues.call(this);
    },
    /** onClick defined for CopybtnSetItem0c2bb99ccbce141 **/
    AS_Button_cd8bbeafe18c4aa1b04eee7552f963da: function AS_Button_cd8bbeafe18c4aa1b04eee7552f963da(eventobject) {
        var self = this;
        return self.GetKey.call(this);
    },
    /** onClick defined for CopybtnSetItem0hf8fbd88ed854e **/
    AS_Button_ba80224ee26141f2997f67361a65b997: function AS_Button_ba80224ee26141f2997f67361a65b997(eventobject) {
        var self = this;
        return self.RemoveItem.call(this);
    },
    /** onClick defined for CopybtnSetItem0da11cb2c387646 **/
    AS_Button_a040204f245f48e18cfec70ad611eaca: function AS_Button_a040204f245f48e18cfec70ad611eaca(eventobject) {
        var self = this;
        return self.ClearItem.call(this);
    }
});