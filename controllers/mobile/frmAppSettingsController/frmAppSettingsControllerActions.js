define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for headerButtonLeft **/
    AS_Button_jca5dec0f8b243a6b313cb2f602ef217: function AS_Button_jca5dec0f8b243a6b313cb2f602ef217(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmDvcFeatures");
        ntf.navigate();
    },
    /** onClick defined for CopyButton0e82f827db0f541 **/
    AS_Button_b01f258036344bada69e304f67d0f2a1: function AS_Button_b01f258036344bada69e304f67d0f2a1(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmAppSetWrite");
        ntf.navigate();
    },
    /** onClick defined for Button0dbdaf9b1c79040 **/
    AS_Button_bc380ffea8874a35b59959c358aeffda: function AS_Button_bc380ffea8874a35b59959c358aeffda(eventobject) {
        var self = this;
        return self.read.call(this);
    }
});