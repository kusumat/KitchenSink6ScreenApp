define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for headerButtonLeft **/
    AS_Button_af7ba0c36bc4483b8b1a794514917853: function AS_Button_af7ba0c36bc4483b8b1a794514917853(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmDvcFeatures");
        ntf.navigate();
    },
    /** onClick defined for btnBadge **/
    AS_Button_j70b480a8ce94e57ba832230b7fcde74: function AS_Button_j70b480a8ce94e57ba832230b7fcde74(eventobject) {
        var self = this;
        return self.BadgeIncrease.call(this);
    },
    /** preShow defined for frmBadge **/
    AS_Form_adc2862fb9284a538d1c73f335e1b70e: function AS_Form_adc2862fb9284a538d1c73f335e1b70e(eventobject) {
        var self = this;
        return self.setBadge.call(this);
    }
});