define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for headerButtonLeft **/
    AS_Button_h9a64bdb7d0e49b1ae11252287fd753e: function AS_Button_h9a64bdb7d0e49b1ae11252287fd753e(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmDvcFeatures");
        ntf.navigate();
    },
    /** onClick defined for Button0g1c5e2d109554a **/
    ACTION_SEQUENCE_AS_eb208ae351224d3997e18f169961e5f4: function ACTION_SEQUENCE_AS_eb208ae351224d3997e18f169961e5f4(eventobject) {
        var self = this;
        return self.createDB.call(this);
    },
    /** onClick defined for CopyButton0a46df5ecc71843 **/
    ACTION_SEQUENCE_AS_gb492e72fc9e4afb9602cc3c6f944767: function ACTION_SEQUENCE_AS_gb492e72fc9e4afb9602cc3c6f944767(eventobject) {
        var self = this;
        return self.doTransactioninsertData.call(this);
    },
    /** onClick defined for CopyButton0a0d20e4f378144 **/
    ACTION_SEQUENCE_AS_fc675486c7bb4588b732e362ec72287a: function ACTION_SEQUENCE_AS_fc675486c7bb4588b732e362ec72287a(eventobject) {
        var self = this;
        return self.doTransactionsqlSelect.call(this);
    },
    /** onClick defined for CopyButton0a9a61fc571e948 **/
    ACTION_SEQUENCE_AS_d76c3157831e48988fbc7e7b3c533489: function ACTION_SEQUENCE_AS_d76c3157831e48988fbc7e7b3c533489(eventobject) {
        var self = this;
        return self.doTransactionUpdate.call(this);
    },
    /** onClick defined for CopyButton0c4c381c6f88e44 **/
    ACTION_SEQUENCE_AS_e78d489d8341459fb5c9197d182f5ce3: function ACTION_SEQUENCE_AS_e78d489d8341459fb5c9197d182f5ce3(eventobject) {
        var self = this;
        return self.doTransactionDelete.call(this);
    }
});