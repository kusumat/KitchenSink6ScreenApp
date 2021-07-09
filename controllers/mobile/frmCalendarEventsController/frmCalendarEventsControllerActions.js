define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for headerButtonLeft **/
    AS_Button_gc6a12fbbd8d44a49d799d5328e8834b: function AS_Button_gc6a12fbbd8d44a49d799d5328e8834b(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmDvcFeatures");
        ntf.navigate();
    },
    /** onClick defined for btnAdd **/
    AS_Button_b55b434b618e426283f953c53f2c9f6f: function AS_Button_b55b434b618e426283f953c53f2c9f6f(eventobject) {
        var self = this;
        return self.CalendarAddEvent.call(this, eventobject);
    },
    /** onClick defined for CopybtnAdd0e548301350a841 **/
    AS_Button_bd0e7bb3f95b46a5b8bf283c6f5eea4f: function AS_Button_bd0e7bb3f95b46a5b8bf283c6f5eea4f(eventobject) {
        var self = this;
        return self.CalendarRemoveEvent.call(this);
    },
    /** onClick defined for CopybtnAdd0f1525ca3afc647 **/
    AS_Button_i302fe9223ee4af989eeaa024229a408: function AS_Button_i302fe9223ee4af989eeaa024229a408(eventobject) {
        var self = this;
        return self.CalendarAddEvent.call(this, eventobject);
    }
});