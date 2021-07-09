define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for headerButtonLeft **/
    AS_Button_e8e451fe25d24594ac1fa12823d78f0c: function AS_Button_e8e451fe25d24594ac1fa12823d78f0c(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmDvcFeatures");
        ntf.navigate();
    },
    /** onClick defined for Button0g1c5e2d109554a **/
    AS_Button_cbf14309135c4837af361029c89f4a89: function AS_Button_cbf14309135c4837af361029c89f4a89(eventobject) {
        var self = this;
        return self.createDB.call(this);
    },
    /** onClick defined for CopyButton0a46df5ecc71843 **/
    AS_Button_e42f09f6da4a4e6f8555a33482149970: function AS_Button_e42f09f6da4a4e6f8555a33482149970(eventobject) {
        var self = this;
        return self.doTransactioninsertData.call(this);
    },
    /** onClick defined for CopyButton0a0d20e4f378144 **/
    AS_Button_g6be9651ca794e26a3a164f14a2dac77: function AS_Button_g6be9651ca794e26a3a164f14a2dac77(eventobject) {
        var self = this;
        return self.doTransactionsqlSelect.call(this);
    },
    /** onClick defined for CopyButton0a9a61fc571e948 **/
    AS_Button_df07311ff98a49b8a46f5c25f1ef57d3: function AS_Button_df07311ff98a49b8a46f5c25f1ef57d3(eventobject) {
        var self = this;
        return self.doTransactionUpdate.call(this);
    },
    /** onClick defined for CopyButton0c4c381c6f88e44 **/
    AS_Button_f48446fd4e9a4643b3c4a3a7ad2f54cc: function AS_Button_f48446fd4e9a4643b3c4a3a7ad2f54cc(eventobject) {
        var self = this;
        return self.doTransactionDelete.call(this);
    }
});