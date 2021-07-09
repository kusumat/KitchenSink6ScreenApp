define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for headerButtonLeft **/
    AS_Button_hbd89b5192404fb891a6f6575a880d04: function AS_Button_hbd89b5192404fb891a6f6575a880d04(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmDvcFeatures");
        ntf.navigate();
    },
    /** preShow defined for frmGeoCurrentNWatch **/
    AS_Form_db38f5c069934de1b893762d5394a8ec: function AS_Form_db38f5c069934de1b893762d5394a8ec(eventobject) {
        var self = this;
        return self.geoPosition.call(this);
    }
});