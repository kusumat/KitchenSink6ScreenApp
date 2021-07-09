define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for headerButtonLeft **/
    AS_Button_b17f3e914256493f8ea5269def794556: function AS_Button_b17f3e914256493f8ea5269def794556(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmDvcFeatures");
        ntf.navigate();
    },
    /** onClick defined for btnSetItem **/
    ACTION_SEQUENCE_AS_afebf3a2a69b4a1cb9aca6fe1d1c0599: function ACTION_SEQUENCE_AS_afebf3a2a69b4a1cb9aca6fe1d1c0599(eventobject) {
        var self = this;
        return self.setItemvalues.call(this);
    },
    /** onClick defined for CopybtnSetItem0h6f9c6db89d144 **/
    ACTION_SEQUENCE_AS_ba702ce3b8be4cfda60c1599cf5d2d15: function ACTION_SEQUENCE_AS_ba702ce3b8be4cfda60c1599cf5d2d15(eventobject) {
        var self = this;
        return self.getItemvalues.call(this);
    },
    /** onClick defined for CopybtnSetItem0c2bb99ccbce141 **/
    ACTION_SEQUENCE_AS_a7c53277f87349e0aa18e8bf1aae353d: function ACTION_SEQUENCE_AS_a7c53277f87349e0aa18e8bf1aae353d(eventobject) {
        var self = this;
        return self.GetKey.call(this);
    },
    /** onClick defined for CopybtnSetItem0hf8fbd88ed854e **/
    ACTION_SEQUENCE_AS_e6d8325fcc2f4ffb9e9dd43e84a878e2: function ACTION_SEQUENCE_AS_e6d8325fcc2f4ffb9e9dd43e84a878e2(eventobject) {
        var self = this;
        return self.RemoveItem.call(this);
    },
    /** onClick defined for CopybtnSetItem0da11cb2c387646 **/
    ACTION_SEQUENCE_AS_d7fd7ce645934659a41613b8478b1367: function ACTION_SEQUENCE_AS_d7fd7ce645934659a41613b8478b1367(eventobject) {
        var self = this;
        return self.ClearItem.call(this);
    }
});