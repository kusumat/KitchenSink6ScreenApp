define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for headerButtonLeft **/
    AS_Button_j3b096f6573641ab90322ac7a2640d7d: function AS_Button_j3b096f6573641ab90322ac7a2640d7d(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmDvcFeatures");
        ntf.navigate();
    },
    /** onClick defined for btnAccMtr **/
    AS_Button_dbe11b8902f54e94ae77957be2d5e00b: function AS_Button_dbe11b8902f54e94ae77957be2d5e00b(eventobject) {
        var self = this;
        return self.retrieveCurrentAcc.call(this);
    },
    /** onClick defined for btnSTrtMntng **/
    AS_Button_b070c48f830a4336924d48ea7ff21357: function AS_Button_b070c48f830a4336924d48ea7ff21357(eventobject) {
        var self = this;
        return self.startmonitoringAcc.call(this);
    },
    /** onClick defined for btnRgtrShake **/
    AS_Button_da0258ee5d03430fac3f2d850d906968: function AS_Button_da0258ee5d03430fac3f2d850d906968(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmRegisterAccelerometer");
        ntf.navigate();
    }
});