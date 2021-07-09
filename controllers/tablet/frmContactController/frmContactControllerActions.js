define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for headerButtonLeft **/
    AS_Button_e24e8b5de74b470aaaa134a5aad02ece: function AS_Button_e24e8b5de74b470aaaa134a5aad02ece(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmDvcFeatures");
        ntf.navigate();
    },
    /** onClick defined for btnAdd **/
    AS_Button_e10314007d2140b4bd6636dcae47a948: function AS_Button_e10314007d2140b4bd6636dcae47a948(eventobject) {
        var self = this;
        return self.addContact.call(this);
    },
    /** onClick defined for btnFind **/
    AS_Button_e4c27146b36a43a8b8f62afc67b1ccb7: function AS_Button_e4c27146b36a43a8b8f62afc67b1ccb7(eventobject) {
        var self = this;
        return self.findContact.call(this);
    },
    /** onClick defined for btnRemove **/
    AS_Button_i0f4ec15a70b460a9041a8b7e7063455: function AS_Button_i0f4ec15a70b460a9041a8b7e7063455(eventobject) {
        var self = this;
        return self.removeContact.call(this);
    }
});