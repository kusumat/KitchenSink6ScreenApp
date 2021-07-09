define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for headerButtonLeft **/
    AS_Button_hae25c9a39ef4493b5dea71d5ede7637: function AS_Button_hae25c9a39ef4493b5dea71d5ede7637(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmBrowserOptions");
        ntf.navigate();
    },
    /** onClick defined for btnBack **/
    AS_Button_e7f1b7f3a5bd4783b09c4c18fbef0d9b: function AS_Button_e7f1b7f3a5bd4783b09c4c18fbef0d9b(eventobject) {
        var self = this;
        return self.goBack.call(this);
    },
    /** onClick defined for btnShare **/
    AS_Button_ca1ab43c0c4a472fb6530803b74fa719: function AS_Button_ca1ab43c0c4a472fb6530803b74fa719(eventobject) {
        var self = this;
        return self.reload.call(this);
    },
    /** onClick defined for btnCopy **/
    AS_Button_i8bedbb307294c64aa821c81c373bef7: function AS_Button_i8bedbb307294c64aa821c81c373bef7(eventobject) {
        var self = this;
        return self.goForward.call(this);
    },
    /** onHide defined for frmBrowser **/
    AS_Form_b71f243409414451a11cc67d4e86401b: function AS_Form_b71f243409414451a11cc67d4e86401b(eventobject) {
        var self = this;
        kony.application.destroyForm("frmBrowser");
    }
});