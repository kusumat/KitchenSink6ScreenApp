define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for headerButtonLeft **/
    AS_Button_i14baa2fe5364e418e4563fa812772af: function AS_Button_i14baa2fe5364e418e4563fa812772af(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmDvcFeatures");
        ntf.navigate();
    },
    /** onClick defined for Button0a532792e8efe49 **/
    AS_Button_a6db5873739c4f8fa32a123d64d4681d: function AS_Button_a6db5873739c4f8fa32a123d64d4681d(eventobject) {
        var self = this;
        return self.Encrypt.call(this);
    },
    /** onClick defined for CopyButton0bfe6507af12d42 **/
    AS_Button_bd28f68e5b34424aa1f5d3c4b634374c: function AS_Button_bd28f68e5b34424aa1f5d3c4b634374c(eventobject) {
        var self = this;
        return self.decrypt.call(this);
    },
    /** onClick defined for CopyButton0dc26a5920be04d **/
    AS_Button_d24b0456f26e4c0281d6a8fe074f5cd0: function AS_Button_d24b0456f26e4c0281d6a8fe074f5cd0(eventobject) {
        var self = this;
        return self.createHashMD2.call(this);
    },
    /** onClick defined for CopyButton0a33bbd159ff74a **/
    AS_Button_d6a051ef927f41638170558886848036: function AS_Button_d6a051ef927f41638170558886848036(eventobject) {
        var self = this;
        return self.createHashMD4.call(this);
    },
    /** onClick defined for CopyButton0c17469b9321d4e **/
    AS_Button_af56578400a24b5cbb5cfbaa9bfc7d49: function AS_Button_af56578400a24b5cbb5cfbaa9bfc7d49(eventobject) {
        var self = this;
        return self.createHashMD5.call(this);
    }
});