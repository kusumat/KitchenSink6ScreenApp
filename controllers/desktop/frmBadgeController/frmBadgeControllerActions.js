define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for headerButtonLeft **/
    AS_Button_e10a6ff8de7b4a90b4ab603f642d0564: function AS_Button_e10a6ff8de7b4a90b4ab603f642d0564(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmDvcFeatures");
        ntf.navigate();
    },
    /** onClick defined for btnBadge **/
    AS_Button_b78dcab86bf9485eb3b79e12e0e55d5a: function AS_Button_b78dcab86bf9485eb3b79e12e0e55d5a(eventobject) {
        var self = this;
        return self.BadgeIncrease.call(this);
    },
    /** preShow defined for frmBadge **/
    AS_Form_b01fb1fc592949aebc9e86ef25e03f91: function AS_Form_b01fb1fc592949aebc9e86ef25e03f91(eventobject) {
        var self = this;
        return self.setBadge.call(this);
    }
});