define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for headerButtonLeft **/
    AS_Button_d99dbe578f0640c2bce4c590b28e780b: function AS_Button_d99dbe578f0640c2bce4c590b28e780b(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmDvcFeatures");
        ntf.navigate();
    },
    /** onClick defined for CopyButton0e82f827db0f541 **/
    AS_Button_a59c56ef1d5248bcad431a283c9a04c4: function AS_Button_a59c56ef1d5248bcad431a283c9a04c4(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmAppSetWrite");
        ntf.navigate();
    },
    /** onClick defined for Button0dbdaf9b1c79040 **/
    AS_Button_bae568ed87f242b98d5ab650ac6e25e0: function AS_Button_bae568ed87f242b98d5ab650ac6e25e0(eventobject) {
        var self = this;
        return self.read.call(this);
    }
});