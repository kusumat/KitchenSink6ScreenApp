define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for headerButtonLeft **/
    AS_Button_c473142eb0a642b78215cadf7616db82: function AS_Button_c473142eb0a642b78215cadf7616db82(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmDvcFeatures");
        ntf.navigate();
    },
    /** preShow defined for frmDeviceInfo **/
    AS_Form_eaeb4ee0745e421a9bcb0f7f78e8d108: function AS_Form_eaeb4ee0745e421a9bcb0f7f78e8d108(eventobject) {
        var self = this;
        return self.deviceInfo.call(this);
    }
});