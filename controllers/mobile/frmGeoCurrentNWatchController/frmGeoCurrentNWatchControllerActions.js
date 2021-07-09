define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for headerButtonLeft **/
    AS_Button_beda2f1503304a6b8878b95c4bf86ecd: function AS_Button_beda2f1503304a6b8878b95c4bf86ecd(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmDvcFeatures");
        ntf.navigate();
    },
    /** preShow defined for frmGeoCurrentNWatch **/
    AS_Form_a4976dd924ad4dd5b1daa01727a05a14: function AS_Form_a4976dd924ad4dd5b1daa01727a05a14(eventobject) {
        var self = this;
        return self.geoPosition.call(this);
    }
});