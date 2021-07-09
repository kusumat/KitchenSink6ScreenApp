define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for headerButtonLeft **/
    AS_Button_c56fcec824a24a228cb4a464574af1c1: function AS_Button_c56fcec824a24a228cb4a464574af1c1(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmDvcFeatures");
        ntf.navigate();
    },
    /** onClick defined for btnAdd **/
    AS_Button_a41776acddc047af9e2f44abaa73741a: function AS_Button_a41776acddc047af9e2f44abaa73741a(eventobject) {
        var self = this;
        return self.addContact.call(this);
    },
    /** onClick defined for btnFind **/
    AS_Button_a3be4a807e464630b7364a4e7ef93829: function AS_Button_a3be4a807e464630b7364a4e7ef93829(eventobject) {
        var self = this;
        return self.findContact.call(this);
    },
    /** onClick defined for btnRemove **/
    AS_Button_jad97183de0543afbadc22db3cafa58f: function AS_Button_jad97183de0543afbadc22db3cafa58f(eventobject) {
        var self = this;
        return self.removeContact.call(this);
    }
});