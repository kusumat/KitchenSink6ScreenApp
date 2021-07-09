define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for headerButtonLeft **/
    AS_Button_d5df88c5c43247d4b4ab3b4881dc255e: function AS_Button_d5df88c5c43247d4b4ab3b4881dc255e(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmAdvancedWidgets");
        ntf.navigate();
    },
    /** onSelection defined for pickOne **/
    AS_PickerView_f5401fb3582f41f0bfbed3ce1c3b3289: function AS_PickerView_f5401fb3582f41f0bfbed3ce1c3b3289(eventobject, component, keyselected) {
        var self = this;
        return self.pickerviewselkeyvalues.call(this);
    },
    /** onClick defined for btnAdd **/
    AS_Button_bebdbf20d7a34cd1827b9da90eb9ce0b: function AS_Button_bebdbf20d7a34cd1827b9da90eb9ce0b(eventobject) {
        var self = this;
        return self.setNewData.call(this);
    }
});