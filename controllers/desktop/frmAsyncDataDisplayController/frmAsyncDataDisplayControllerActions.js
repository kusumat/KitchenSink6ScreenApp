define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for headerButtonLeft **/
    AS_Button_dc413e20b36a4772ad6ce545634b42fe: function AS_Button_dc413e20b36a4772ad6ce545634b42fe(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmDvcFeatures");
        ntf.navigate();
    },
    /** postShow defined for frmAsyncDataDisplay **/
    AS_Form_d204d097048f43e0963e431f04872e61: function AS_Form_d204d097048f43e0963e431f04872e61(eventobject) {
        var self = this;
        return self.httpRequestCall.call(this);
    }
});