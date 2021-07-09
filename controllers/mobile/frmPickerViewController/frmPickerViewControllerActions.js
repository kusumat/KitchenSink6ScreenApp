define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for headerButtonLeft **/
    AS_Button_c2c823250d0d499e8a14aba31f88e799: function AS_Button_c2c823250d0d499e8a14aba31f88e799(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmAdvancedWidgets");
        ntf.navigate();
    },
    /** onSelection defined for pickOne **/
    ACTION_SEQUENCE_AS_b751377f62144bd8b9e85e1e2186711e: function ACTION_SEQUENCE_AS_b751377f62144bd8b9e85e1e2186711e(eventobject, component, keyselected) {
        var self = this;
        return self.pickerviewselkeyvalues.call(this);
    },
    /** onClick defined for btnAdd **/
    ACTION_SEQUENCE_AS_eb4ec7862f0442588082151ff590ddd4: function ACTION_SEQUENCE_AS_eb4ec7862f0442588082151ff590ddd4(eventobject) {
        var self = this;
        return self.setNewData.call(this);
    }
});