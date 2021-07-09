define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for headerButtonLeft **/
    AS_Button_d9c7cb8bc2a9489690b160dc78df30f5: function AS_Button_d9c7cb8bc2a9489690b160dc78df30f5(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmDvcFeatures");
        ntf.navigate();
    },
    /** onClick defined for btnBadge **/
    AS_Button_d4cbe27e1653498fb5a8db4517407542: function AS_Button_d4cbe27e1653498fb5a8db4517407542(eventobject) {
        var self = this;
        return self.BadgeIncrease.call(this);
    },
    /** preShow defined for frmBadge **/
    AS_Form_ia3f092c989d4070b31545a13f1c725f: function AS_Form_ia3f092c989d4070b31545a13f1c725f(eventobject) {
        var self = this;
        return self.setBadge.call(this);
    }
});