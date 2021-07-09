define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for headerButtonLeft **/
    AS_Button_b35694ed7fe846929d1a8ad8e8da2c0b: function AS_Button_b35694ed7fe846929d1a8ad8e8da2c0b(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmHome");
        ntf.navigate();
    },
    /** onClick defined for btnAccMtr **/
    ACTION_SEQUENCE_AS_jcf38b975034474eacc4d07ed46e59e5: function ACTION_SEQUENCE_AS_jcf38b975034474eacc4d07ed46e59e5(eventobject) {
        var self = this;
        if (kony.os.deviceInfo().model != "iPhone Simulator" && kony.os.userAgent() != "google_sdk") {
            var ntf = new kony.mvc.Navigation("frmAclmeterOptions");
            ntf.navigate();
        } else {
            alert("Works only on device");
        }
    },
    /** onClick defined for btnBadge **/
    ACTION_SEQUENCE_AS_cfe4e089a45f4bdda5ecbd96e0b6afa3: function ACTION_SEQUENCE_AS_cfe4e089a45f4bdda5ecbd96e0b6afa3(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmBadge");
        ntf.navigate();
    },
    /** onClick defined for btnAppSetngs **/
    ACTION_SEQUENCE_AS_cebfc8aabfc74cce9f8dad7b5ac014e5: function ACTION_SEQUENCE_AS_cebfc8aabfc74cce9f8dad7b5ac014e5(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmAppSettings");
        ntf.navigate();
    },
    /** onClick defined for btnCamera **/
    ACTION_SEQUENCE_AS_c02522165fb8433d91d53fb6f249b242: function ACTION_SEQUENCE_AS_c02522165fb8433d91d53fb6f249b242(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmCameraOptions");
        ntf.navigate();
    },
    /** onClick defined for btnGeolocatn **/
    ACTION_SEQUENCE_AS_cae8828546d7455faaee8afa895f0cdd: function ACTION_SEQUENCE_AS_cae8828546d7455faaee8afa895f0cdd(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmGeoCurrentNWatch");
        ntf.navigate();
    },
    /** onClick defined for btnEmail **/
    ACTION_SEQUENCE_AS_c38271a3facd4a4293a83166c39bac41: function ACTION_SEQUENCE_AS_c38271a3facd4a4293a83166c39bac41(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmEmail");
        ntf.navigate();
    },
    /** onClick defined for btnAddrs **/
    ACTION_SEQUENCE_AS_id2d459b71fb4b43895045bb96f12ada: function ACTION_SEQUENCE_AS_id2d459b71fb4b43895045bb96f12ada(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmContact");
        ntf.navigate();
    },
    /** onClick defined for btnSms **/
    ACTION_SEQUENCE_AS_cbeb62c3892642fdbbff15f32d4b6acc: function ACTION_SEQUENCE_AS_cbeb62c3892642fdbbff15f32d4b6acc(eventobject) {
        var self = this;
        return self.sendSMS.call(this);
    },
    /** onClick defined for btnDevcInfo **/
    ACTION_SEQUENCE_AS_df14e36cada5427b953facebc12e2cf7: function ACTION_SEQUENCE_AS_df14e36cada5427b953facebc12e2cf7(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmDeviceInfo");
        ntf.navigate();
    },
    /** onClick defined for btnLocalStrg **/
    ACTION_SEQUENCE_AS_babbb0ba6407449bbaf229c7a3c249c6: function ACTION_SEQUENCE_AS_babbb0ba6407449bbaf229c7a3c249c6(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmLocalStore");
        ntf.navigate();
    },
    /** onClick defined for btnWbSQL **/
    ACTION_SEQUENCE_AS_hd4ac83921fa4ad2a5972f64dec07b1c: function ACTION_SEQUENCE_AS_hd4ac83921fa4ad2a5972f64dec07b1c(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmWebSQL");
        ntf.navigate();
    },
    /** onClick defined for btnCrypto **/
    ACTION_SEQUENCE_AS_f6c0208b8d3b42178be7a7143d9653d4: function ACTION_SEQUENCE_AS_f6c0208b8d3b42178be7a7143d9653d4(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmCrypto");
        ntf.navigate();
    },
    /** onClick defined for btnAsyncData **/
    AS_Button_bba1f949733d46a8805e1cd97aba483c: function AS_Button_bba1f949733d46a8805e1cd97aba483c(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmAsyncDataDisplay");
        ntf.navigate();
    },
    /** onClick defined for btnCalEvents **/
    ACTION_SEQUENCE_AS_e33e5fa8aade4b9491aa3d5b25512ec6: function ACTION_SEQUENCE_AS_e33e5fa8aade4b9491aa3d5b25512ec6(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmCalendarEvents");
        ntf.navigate();
    }
});