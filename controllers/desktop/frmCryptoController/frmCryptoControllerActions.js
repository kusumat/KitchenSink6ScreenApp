define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for headerButtonLeft **/
    AS_Button_e6540653e3b34c59b008ea65107c1ff6: function AS_Button_e6540653e3b34c59b008ea65107c1ff6(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmDvcFeatures");
        ntf.navigate();
    },
    /** onClick defined for Button0a532792e8efe49 **/
    AS_Button_ef1b576d4ff04947ac29af2b94768ef4: function AS_Button_ef1b576d4ff04947ac29af2b94768ef4(eventobject) {
        var self = this;
        return self.Encrypt.call(this);
    },
    /** onClick defined for CopyButton0bfe6507af12d42 **/
    AS_Button_d336cc6832b04accba6cde06fcdd4ca4: function AS_Button_d336cc6832b04accba6cde06fcdd4ca4(eventobject) {
        var self = this;
        return self.decrypt.call(this);
    },
    /** onClick defined for CopyButton0dc26a5920be04d **/
    AS_Button_g4c4a0cfcb9d44c8b7258a72e7ecd6b6: function AS_Button_g4c4a0cfcb9d44c8b7258a72e7ecd6b6(eventobject) {
        var self = this;
        return self.createHashMD2.call(this);
    },
    /** onClick defined for CopyButton0a33bbd159ff74a **/
    AS_Button_dbca7039484d4bd498b5ff4e7ad67bf8: function AS_Button_dbca7039484d4bd498b5ff4e7ad67bf8(eventobject) {
        var self = this;
        return self.createHashMD4.call(this);
    },
    /** onClick defined for CopyButton0c17469b9321d4e **/
    AS_Button_dd4314d4a1334ebfb4006bcf316e7352: function AS_Button_dd4314d4a1334ebfb4006bcf316e7352(eventobject) {
        var self = this;
        return self.createHashMD5.call(this);
    }
});