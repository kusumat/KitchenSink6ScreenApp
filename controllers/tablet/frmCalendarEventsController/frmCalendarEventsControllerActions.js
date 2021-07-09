define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for headerButtonLeft **/
    AS_Button_b1df7c1be33c4d82b0d2da4b818e63eb: function AS_Button_b1df7c1be33c4d82b0d2da4b818e63eb(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmDvcFeatures");
        ntf.navigate();
    },
    /** onClick defined for btnAdd **/
    AS_Button_if445fd736f347448aa262a8424de2b0: function AS_Button_if445fd736f347448aa262a8424de2b0(eventobject) {
        var self = this;
        return self.CalendarAddEvent.call(this, eventobject);
    },
    /** onClick defined for CopybtnAdd0e548301350a841 **/
    AS_Button_hacf79c267ee48b9b8e4fd7928c04419: function AS_Button_hacf79c267ee48b9b8e4fd7928c04419(eventobject) {
        var self = this;
        return self.CalendarRemoveEvent.call(this);
    },
    /** onClick defined for CopybtnAdd0f1525ca3afc647 **/
    AS_Button_f28538ba99ae4c44ab12033cf0b8ebbf: function AS_Button_f28538ba99ae4c44ab12033cf0b8ebbf(eventobject) {
        var self = this;
        return self.CalendarAddEvent.call(this, eventobject);
    }
});