define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for headerButtonLeft **/
    AS_Button_h7c1cc3bbe2845f1bf4131248688a6b6: function AS_Button_h7c1cc3bbe2845f1bf4131248688a6b6(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmBrowserOptions");
        ntf.navigate();
    },
    /** onClick defined for btnBack **/
    AS_Button_bbe2153b754e4a6ca4f7d7a1c9ab0e22: function AS_Button_bbe2153b754e4a6ca4f7d7a1c9ab0e22(eventobject) {
        var self = this;
        return self.goBack.call(this);
    },
    /** onClick defined for btnShare **/
    AS_Button_d6e2cb4a3f7d44d4b4bc7433be07913f: function AS_Button_d6e2cb4a3f7d44d4b4bc7433be07913f(eventobject) {
        var self = this;
        return self.reload.call(this);
    },
    /** onClick defined for btnCopy **/
    AS_Button_j6e4dc4088374256818f620b538750ae: function AS_Button_j6e4dc4088374256818f620b538750ae(eventobject) {
        var self = this;
        return self.goForward.call(this);
    },
    /** onHide defined for frmBrowser **/
    AS_Form_fbd66fb955b1443589e66719fc1b3f73: function AS_Form_fbd66fb955b1443589e66719fc1b3f73(eventobject) {
        var self = this;
        kony.application.destroyForm("frmBrowser");
    }
});