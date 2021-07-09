define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for headerButtonLeft **/
    AS_Button_d1cb1f7acef64104b71bd88237c7c1ca: function AS_Button_d1cb1f7acef64104b71bd88237c7c1ca(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmDvcFeatures");
        ntf.navigate();
    },
    /** preShow defined for frmGeoCurrentNWatch **/
    AS_Form_f47b6c7bb6d24c718aab05040422d2b3: function AS_Form_f47b6c7bb6d24c718aab05040422d2b3(eventobject) {
        var self = this;
        return self.geoPosition.call(this);
    }
});