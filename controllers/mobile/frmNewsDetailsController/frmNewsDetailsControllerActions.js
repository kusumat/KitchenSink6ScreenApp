define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for headerButtonLeft **/
    AS_Button_e2dd0e980662446a819c9ffcfafd3b31: function AS_Button_e2dd0e980662446a819c9ffcfafd3b31(eventobject) {
        var self = this;
        var previewsForm = voltmx.application.getPreviousForm();
        //alert(previewsForm.id);
        var navToPreForm = new voltmx.mvc.Navigation(previewsForm.id);
        navToPreForm.navigate(1);
    }
});