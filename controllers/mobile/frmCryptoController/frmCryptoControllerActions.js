define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for headerButtonLeft **/
    AS_Button_ceb75c11638841438b4b1a315a855f77: function AS_Button_ceb75c11638841438b4b1a315a855f77(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmDvcFeatures");
        ntf.navigate();
    },
    /** onClick defined for Button0a532792e8efe49 **/
    ACTION_SEQUENCE_AS_a0ec025d37e34a76835186d60cdc4f1f: function ACTION_SEQUENCE_AS_a0ec025d37e34a76835186d60cdc4f1f(eventobject) {
        var self = this;
        return self.Encrypt.call(this);
    },
    /** onClick defined for CopyButton0bfe6507af12d42 **/
    ACTION_SEQUENCE_AS_e0e6ea16863446a497b41272314dfdc7: function ACTION_SEQUENCE_AS_e0e6ea16863446a497b41272314dfdc7(eventobject) {
        var self = this;
        return self.decrypt.call(this);
    },
    /** onClick defined for CopyButton0dc26a5920be04d **/
    ACTION_SEQUENCE_AS_b525a122a4194a6887c5e08142799c35: function ACTION_SEQUENCE_AS_b525a122a4194a6887c5e08142799c35(eventobject) {
        var self = this;
        return self.createHashMD2.call(this);
    },
    /** onClick defined for CopyButton0a33bbd159ff74a **/
    ACTION_SEQUENCE_AS_ja5b93e0b7e545d3a2b6b09a8e3d4b9f: function ACTION_SEQUENCE_AS_ja5b93e0b7e545d3a2b6b09a8e3d4b9f(eventobject) {
        var self = this;
        return self.createHashMD4.call(this);
    },
    /** onClick defined for CopyButton0c17469b9321d4e **/
    ACTION_SEQUENCE_AS_a9d6910ff36b40ecb0f12c0e6c1e99c4: function ACTION_SEQUENCE_AS_a9d6910ff36b40ecb0f12c0e6c1e99c4(eventobject) {
        var self = this;
        return self.createHashMD5.call(this);
    }
});