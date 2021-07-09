define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for headerButtonLeft **/
    AS_Button_idec214e5fd74ff581d100ed030f3de7: function AS_Button_idec214e5fd74ff581d100ed030f3de7(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmBrowserOptions");
        ntf.navigate();
    },
    /** onClick defined for btnBack **/
    AS_Button_i11e3ae63ce1469387cce03b43531a5e: function AS_Button_i11e3ae63ce1469387cce03b43531a5e(eventobject) {
        var self = this;
        return self.goBack.call(this);
    },
    /** onClick defined for btnShare **/
    AS_Button_ab8ccbd1d72e4eb7a29ab44b69ad2eb1: function AS_Button_ab8ccbd1d72e4eb7a29ab44b69ad2eb1(eventobject) {
        var self = this;
        return self.reload.call(this);
    },
    /** onClick defined for btnCopy **/
    AS_Button_d329cbe22dad4a59ab2785c6c32bb6c8: function AS_Button_d329cbe22dad4a59ab2785c6c32bb6c8(eventobject) {
        var self = this;
        return self.goForward.call(this);
    },
    /** onHide defined for frmBrowser **/
    AS_Form_afaef64f28ce42a4b2bbe57b27855d0a: function AS_Form_afaef64f28ce42a4b2bbe57b27855d0a(eventobject) {
        var self = this;
        kony.application.destroyForm("frmBrowser");
    }
});