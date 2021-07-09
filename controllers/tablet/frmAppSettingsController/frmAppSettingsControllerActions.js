define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for headerButtonLeft **/
    AS_Button_ff1c2fd331d64013bbbb45f6f7fb0035: function AS_Button_ff1c2fd331d64013bbbb45f6f7fb0035(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmDvcFeatures");
        ntf.navigate();
    },
    /** onClick defined for CopyButton0e82f827db0f541 **/
    AS_Button_gf3b025eabcd429ea1c9ea85bf46eb6f: function AS_Button_gf3b025eabcd429ea1c9ea85bf46eb6f(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmAppSetWrite");
        ntf.navigate();
    },
    /** onClick defined for Button0dbdaf9b1c79040 **/
    AS_Button_cdfdee3f87c3470ea43221ddcd486c54: function AS_Button_cdfdee3f87c3470ea43221ddcd486c54(eventobject) {
        var self = this;
        return self.read.call(this);
    }
});