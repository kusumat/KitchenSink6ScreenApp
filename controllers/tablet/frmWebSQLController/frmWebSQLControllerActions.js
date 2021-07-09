define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for headerButtonLeft **/
    AS_Button_bc8c2273541e4da5b1e900d25e642408: function AS_Button_bc8c2273541e4da5b1e900d25e642408(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmDvcFeatures");
        ntf.navigate();
    },
    /** onClick defined for Button0g1c5e2d109554a **/
    AS_Button_g90d7cca54d9416088794e624a80ab00: function AS_Button_g90d7cca54d9416088794e624a80ab00(eventobject) {
        var self = this;
        return self.createDB.call(this);
    },
    /** onClick defined for CopyButton0a46df5ecc71843 **/
    AS_Button_b368cae4045d421f835efc808b56608f: function AS_Button_b368cae4045d421f835efc808b56608f(eventobject) {
        var self = this;
        return self.doTransactioninsertData.call(this);
    },
    /** onClick defined for CopyButton0a0d20e4f378144 **/
    AS_Button_dec47c5171e2497e868a30f9798f968c: function AS_Button_dec47c5171e2497e868a30f9798f968c(eventobject) {
        var self = this;
        return self.doTransactionsqlSelect.call(this);
    },
    /** onClick defined for CopyButton0a9a61fc571e948 **/
    AS_Button_d681f3af92dd46f995d58caa59125e91: function AS_Button_d681f3af92dd46f995d58caa59125e91(eventobject) {
        var self = this;
        return self.doTransactionUpdate.call(this);
    },
    /** onClick defined for CopyButton0c4c381c6f88e44 **/
    AS_Button_e6db7335d66e4634ab1bba577624726c: function AS_Button_e6db7335d66e4634ab1bba577624726c(eventobject) {
        var self = this;
        return self.doTransactionDelete.call(this);
    }
});