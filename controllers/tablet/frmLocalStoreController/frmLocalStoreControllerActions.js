define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for headerButtonLeft **/
    AS_Button_cf5691fd4c16458eafd6c9abcef2f3dc: function AS_Button_cf5691fd4c16458eafd6c9abcef2f3dc(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmDvcFeatures");
        ntf.navigate();
    },
    /** onClick defined for btnSetItem **/
    AS_Button_ic1cbead27fc4e98aa12cab513cd61ac: function AS_Button_ic1cbead27fc4e98aa12cab513cd61ac(eventobject) {
        var self = this;
        return self.setItemvalues.call(this);
    },
    /** onClick defined for CopybtnSetItem0h6f9c6db89d144 **/
    AS_Button_d819a29178904324a02179130ef393cf: function AS_Button_d819a29178904324a02179130ef393cf(eventobject) {
        var self = this;
        return self.getItemvalues.call(this);
    },
    /** onClick defined for CopybtnSetItem0c2bb99ccbce141 **/
    AS_Button_d1f9ba1644f04523987f2d52424d8ad5: function AS_Button_d1f9ba1644f04523987f2d52424d8ad5(eventobject) {
        var self = this;
        return self.GetKey.call(this);
    },
    /** onClick defined for CopybtnSetItem0hf8fbd88ed854e **/
    AS_Button_h4374ee908ce4d878a40a9df5f08767e: function AS_Button_h4374ee908ce4d878a40a9df5f08767e(eventobject) {
        var self = this;
        return self.RemoveItem.call(this);
    },
    /** onClick defined for CopybtnSetItem0da11cb2c387646 **/
    AS_Button_ee1bd0aa97aa4b8c8e54dcca47241df5: function AS_Button_ee1bd0aa97aa4b8c8e54dcca47241df5(eventobject) {
        var self = this;
        return self.ClearItem.call(this);
    }
});