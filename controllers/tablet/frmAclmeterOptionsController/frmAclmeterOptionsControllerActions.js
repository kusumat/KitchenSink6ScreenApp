define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for headerButtonLeft **/
    AS_Button_j4c195c43bcf42d1a2f4ed240a7ce28a: function AS_Button_j4c195c43bcf42d1a2f4ed240a7ce28a(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmDvcFeatures");
        ntf.navigate();
    },
    /** onClick defined for btnAccMtr **/
    AS_Button_gc22c7690a794666860865cee3126c73: function AS_Button_gc22c7690a794666860865cee3126c73(eventobject) {
        var self = this;
        return self.retrieveCurrentAcc.call(this);
    },
    /** onClick defined for btnSTrtMntng **/
    AS_Button_f5b1be9f7e4e4e79a74cf8671c2f8693: function AS_Button_f5b1be9f7e4e4e79a74cf8671c2f8693(eventobject) {
        var self = this;
        return self.startmonitoringAcc.call(this);
    },
    /** onClick defined for btnRgtrShake **/
    AS_Button_ie751ff8532a4da69e65c61195423209: function AS_Button_ie751ff8532a4da69e65c61195423209(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmRegisterAccelerometer");
        ntf.navigate();
    }
});