define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for headerButtonLeft **/
    AS_Button_e9f112816de243aa8a10b400f3b94cf2: function AS_Button_e9f112816de243aa8a10b400f3b94cf2(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmDvcFeatures");
        ntf.navigate();
    },
    /** onClick defined for btnAdd **/
    AS_Button_cb90a91b96e348b883c249121e12911e: function AS_Button_cb90a91b96e348b883c249121e12911e(eventobject) {
        var self = this;
        return self.addContact.call(this);
    },
    /** onClick defined for btnFind **/
    AS_Button_afe3914cdaa64642ae01ceaa27bd45d6: function AS_Button_afe3914cdaa64642ae01ceaa27bd45d6(eventobject) {
        var self = this;
        return self.findContact.call(this);
    },
    /** onClick defined for btnRemove **/
    AS_Button_h757fe97981c4ca78c41eb14a7035e7a: function AS_Button_h757fe97981c4ca78c41eb14a7035e7a(eventobject) {
        var self = this;
        return self.removeContact.call(this);
    }
});