define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for headerButtonLeft **/
    AS_Button_d9eb29c816924ef593db8f28ed75598a: function AS_Button_d9eb29c816924ef593db8f28ed75598a(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmDvcFeatures");
        ntf.navigate();
    },
    /** onClick defined for btnAdd **/
    AS_Button_d6f01df9d9da4b2e935bb22bedcc0e4e: function AS_Button_d6f01df9d9da4b2e935bb22bedcc0e4e(eventobject) {
        var self = this;
        return self.CalendarAddEvent.call(this, eventobject);
    },
    /** onClick defined for CopybtnAdd0e548301350a841 **/
    AS_Button_i713fa0649b34b6186ee0144658dfee5: function AS_Button_i713fa0649b34b6186ee0144658dfee5(eventobject) {
        var self = this;
        return self.CalendarRemoveEvent.call(this);
    },
    /** onClick defined for CopybtnAdd0f1525ca3afc647 **/
    AS_Button_d8c744b13fd04ce9bea4895b2d4a0ac3: function AS_Button_d8c744b13fd04ce9bea4895b2d4a0ac3(eventobject) {
        var self = this;
        return self.CalendarAddEvent.call(this, eventobject);
    }
});