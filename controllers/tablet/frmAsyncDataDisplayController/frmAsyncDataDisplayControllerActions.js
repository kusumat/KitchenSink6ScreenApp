define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for headerButtonLeft **/
    AS_Button_ga4720e12f5a401eb8f4931c35b70505: function AS_Button_ga4720e12f5a401eb8f4931c35b70505(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmDvcFeatures");
        ntf.navigate();
    },
    /** postShow defined for frmAsyncDataDisplay **/
    AS_Form_e8af3e48ff03425da5d5e06372aa555a: function AS_Form_e8af3e48ff03425da5d5e06372aa555a(eventobject) {
        var self = this;
        return self.httpRequestCall.call(this);
    }
});